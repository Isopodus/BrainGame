import React from "react";
import { Text } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./ProfileTable.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { RowLayout } from "../../../../library/Layouts/RowLayout";

export const ProfileTable = ({ user }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  return (
    <VerticalLayout style={stylesWithTheme.container}>
      <Text style={stylesWithTheme.title}>Player's information:</Text>
      <RowLayout>
        <VerticalLayout style={stylesWithTheme.column}>
          <Text style={stylesWithTheme.columnName}>Name: </Text>
          <Text style={stylesWithTheme.columnName}>Email: </Text>
        </VerticalLayout>
        <VerticalLayout style={stylesWithTheme.column}>
          <Text style={stylesWithTheme.columnText}>{user.username}</Text>
          <Text style={stylesWithTheme.columnText}>{user.email}</Text>
        </VerticalLayout>
      </RowLayout>
    </VerticalLayout>
  );
};
