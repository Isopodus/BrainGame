import React, { useCallback, useEffect, useState } from "react";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { ScrollView } from "react-native";
import { styles } from "./Rating.styles";
import { Header } from "../../library/Molecules/Header";
import { Animation } from "../../library/Atoms/Animations";
import { RatingPlayerScore } from "./components/RatingPlayerScore/RatingPlayerScore";
import { PrimaryButton } from "../../library/Atoms/Button/PrimaryButton";
import { useSelector } from "react-redux";
import { api } from "../../requests/api";
import { Backdrop } from "../../library/Atoms/Backdrop";
import { useToggle } from "../../hooks/useToggle";

export const Rating = ({ navigation }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const token = useSelector(state => state.token);
  const user = useSelector(state => state.user);

  const [scores, setScores] = useState([]);
  const [playerBestScore, setPlayerBestScore] = useState(0);

  const [pageLoading, togglePageLoading] = useToggle(false);

  const onPressBack = useCallback(() => navigation.navigate("Home"));

  useEffect(() => {
    togglePageLoading();

    const timeout = setTimeout(() => {
      api.getLeaderboard(token).then(data => {
        togglePageLoading();

        const scores = Object.keys(data.data).map(key => data.data[key]);
        setPlayerBestScore(scores.find(score => score.number === user.number)?.totalScore ?? 0);
        setScores(scores);
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [token]);

  return (
    <PageLayout profileMode>
      {pageLoading && <Backdrop />}

      <Header rounded>
        <Animation name={"piggy-bank"} style={stylesWithTheme.animation} />
      </Header>
      <ScrollView style={stylesWithTheme.page}>
        <RatingPlayerScore scores={scores} playerBestScore={playerBestScore} />
      </ScrollView>
      <PrimaryButton title={"Back to the menu"} style={stylesWithTheme.button} secondaryColor onPress={onPressBack} />
    </PageLayout>
  );
};
