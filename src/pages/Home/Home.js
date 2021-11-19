import React, { useCallback, useEffect } from "react";
import Orientation from "react-native-orientation";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, View } from "react-native";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { HomeGameCard } from "./components/HomeGameCard/HomeGameCard";
import { Header } from "../../library/Molecules/Header";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { styles } from "./Home.styles";
import { setAction, cleanAction } from "../../../store";
import { api } from "../../requests/api";
import { GAMES_ENUM } from "../../../constants";
import { useNavigation, useRoute } from "@react-navigation/native";

export const Home = () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const dispatch = useDispatch();
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const token = useSelector(state => state.token);
  const session = useSelector(state => state.session);

  const resetGameSession = useCallback(() => {
    api.cancelSession(token).then(data => loadSession(data.data));
  }, [token]);

  const loadSession = useCallback(
    mySession => {
      if (mySession?.sessionDifficulty) {
        dispatch(setAction("session", mySession));
      } else {
        api.lastSession(token).then(data => {
          const lastSession = data.data;
          if (lastSession.sessionStatus === 0) {
            dispatch(setAction("session", lastSession));
          } else {
            dispatch(cleanAction("session"));
          }
        });
      }
    },
    [token],
  );

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
      startNewSession(difficulty).then(newSession => {
        console.log("new session", gameNumber, newSession);
        navigate(GAMES_ENUM[gameNumber], { difficulty });
      });
    } else {
      // Continue with the previous session
      console.log("old session", gameNumber, session);
      navigate(GAMES_ENUM[gameNumber], { difficulty: session.sessionDifficulty });
    }
  });

  useEffect(() => {
    if (route.params?.newSession) {
      console.log("upd", route.params.newSession);
      loadSession(route.params.newSession);
    }
  }, [route?.params?.newSession]);

  useEffect(() => {
    Orientation.lockToPortrait();
    loadSession();
  }, []);

  return (
    <PageLayout>
      <Header title={"Brain\n    game"} />

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
          disabled={session.sessionStage < 1}
          completed={session.sessionStage > 1}
          onApplyDifficulty={(difficulty, gameNumber) => startGame(difficulty, gameNumber)}
          onResetGame={resetGameSession}
        />
        <HomeGameCard
          title={`Third${"\n"}game`}
          gameNumber={2}
          disabled={session.sessionStage <= 1}
          completed={session.sessionStatus > 0}
          onApplyDifficulty={(difficulty, gameNumber) => startGame(difficulty, gameNumber)}
          onResetGame={resetGameSession}
        />
      </ScrollView>

      <View style={stylesWithTheme.bottomCircle} />
    </PageLayout>
  );
};
