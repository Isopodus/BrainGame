import React from "react";
import { Text, View } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./RatingPlayerScore.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { RowLayout } from "../../../../library/Layouts/RowLayout";

export const RatingPlayerScore = () => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <VerticalLayout style={stylesWithTheme.container}>
      <Text style={stylesWithTheme.title}>Your best score:</Text>
      <Text style={stylesWithTheme.bestScore}>26</Text>

      <View>
        <Text style={stylesWithTheme.subtitle}>Best players results:</Text>

        <RowLayout style={stylesWithTheme.scoreRow}>
          <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers, stylesWithTheme.firstColumn]}>
            Player №
          </Text>
          <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers]}>Best score</Text>
          <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers, stylesWithTheme.lastColumn]}>Status</Text>
        </RowLayout>
        <RowLayout style={stylesWithTheme.scoreRow}>
          <Text
            style={[
              stylesWithTheme.scoreColumn,
              stylesWithTheme.headers,
              stylesWithTheme.firstColumn,
              stylesWithTheme.text,
            ]}
          >
            454
          </Text>
          <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers, stylesWithTheme.text]}>35</Text>
          <Text
            style={[
              stylesWithTheme.scoreColumn,
              stylesWithTheme.headers,
              stylesWithTheme.lastColumn,
              stylesWithTheme.text,
            ]}
          >
            Winner
          </Text>
        </RowLayout>
        <RowLayout style={stylesWithTheme.scoreRow}>
          <Text
            style={[
              stylesWithTheme.scoreColumn,
              stylesWithTheme.headers,
              stylesWithTheme.firstColumn,
              stylesWithTheme.text,
            ]}
          >
            453
          </Text>
          <Text style={[stylesWithTheme.scoreColumn, stylesWithTheme.headers, stylesWithTheme.text]}>34</Text>
          <Text
            style={[
              stylesWithTheme.scoreColumn,
              stylesWithTheme.headers,
              stylesWithTheme.lastColumn,
              stylesWithTheme.text,
            ]}
          >
            Loser
          </Text>
        </RowLayout>
      </View>
    </VerticalLayout>
  );
};
