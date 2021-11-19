import React from "react";
import { Text, View } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./RatingPlayerScore.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { RowLayout } from "../../../../library/Layouts/RowLayout";

export const RatingPlayerScore = ({ scores, playerBestScore }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <VerticalLayout style={stylesWithTheme.container}>
      <Text style={stylesWithTheme.title}>Your best score:</Text>
      <Text style={stylesWithTheme.bestScore}>{playerBestScore}</Text>

      <View>
        <Text style={stylesWithTheme.subtitle}>Other players results:</Text>

        <RowLayout style={stylesWithTheme.scoreRow}>
          <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers, stylesWithTheme.firstColumn]}>
            Player №
          </Text>
          <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers]}>Best score</Text>
          <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers, stylesWithTheme.lastColumn]}>Status</Text>
        </RowLayout>
        {scores.map((scoreRow, idx) => (
          <RowLayout key={idx} style={stylesWithTheme.scoreRow}>
            <Text
              style={[
                stylesWithTheme.scoreColumn,
                stylesWithTheme.headers,
                stylesWithTheme.firstColumn,
                stylesWithTheme.text,
              ]}
            >
              {scoreRow.number}
            </Text>
            <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers, stylesWithTheme.text]}>
              {scoreRow.totalScore}
            </Text>
            <Text
              style={[
                stylesWithTheme.scoreColumn,
                stylesWithTheme.headers,
                stylesWithTheme.lastColumn,
                stylesWithTheme.text,
              ]}
            >
              {scoreRow.passedAllGames ? "Winner" : "Looser"}
            </Text>
          </RowLayout>
        ))}
      </View>
    </VerticalLayout>
  );
};
