import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, View } from "react-native";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { HomeGameCard } from "./components/HomeGameCard/HomeGameCard";
import { Header } from "../../library/Molecules/Header";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { styles } from "./Home.styles";
import { setAction, cleanAction } from "../../../store";
import { api } from "../../requests/api";

export const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const token = useSelector(state => state.token);
  const session = useSelector(state => state.session);

  const loadSession = useCallback(() => {
    api.lastSession(token).then(data => {
      const lastSession = data.data;
      if (lastSession.sessionStatus === 0) {
        dispatch(setAction("session", lastSession));
      } else {
        dispatch(cleanAction("session"));
      }
    });
  }, [token]);

  const startNewSession = useCallback(difficulty => {
    return api.newSession({ difficulty }, token).then(data => {
      dispatch(setAction("session", data.data));
      console.log("New session", data.data);
      return data.data;
    });
  });

  const startGame = useCallback((difficulty, gameNumber) => {
    if (session.sessionStatus === null) {
      // Create new session if needed
      startNewSession(difficulty).then(session => {
        console.log("new session, game ", gameNumber);
      });
    } else {
      // Continue with the previous session
      console.log("old session, game ", gameNumber);
    }
  });

  const resetGameSession = useCallback(() => {
    api.cancelSession(token).then(loadSession);
  }, [token]);

  useEffect(loadSession);

  return (
    <PageLayout>
      <Header title={"Brain game"} navigation={navigation} />

      <ScrollView>
        <HomeGameCard
          title={`First${"\n"}game`}
          gameNumber={0}
          style={stylesWithTheme.firstCard}
          completed={session.sessionStage > 0}
          onApplyDifficulty={(difficulty, gameNumber) => startGame(difficulty, gameNumber)}
          onResetGame={resetGameSession}
        />
        <HomeGameCard
          title={<>SEcond{"\n"}game</>}
          gameNumber={1}
          reverse
          disabled={!session.sessionStage}
          completed={session.sessionStage > 1}
          onApplyDifficulty={(difficulty, gameNumber) => startGame(difficulty, gameNumber)}
          onResetGame={resetGameSession}
        />
        <HomeGameCard
          title={`Third${"\n"}game`}
          gameNumber={2}
          disabled
          completed={session.sessionStatus > 0}
          onApplyDifficulty={(difficulty, gameNumber) => startGame(difficulty, gameNumber)}
          onResetGame={resetGameSession}
        />
      </ScrollView>

      <View style={stylesWithTheme.bottomCircle} />
    </PageLayout>
  );
};
