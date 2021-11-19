import React, { useMemo, useState } from "react";
import { Text, View } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./HomeDifficultiesModal.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { Popup } from "../../../../library/Molecules/Popup";
import { BaseButton } from "../../../../library/Atoms/Button/BaseButton";
import { RadioButtonsGroup } from "../../../../library/Molecules/RadioButtonsGroup";

export const HomeDifficultiesModal = ({ open, toggleModal }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const [difficulty, setDifficulty] = useState("easy");

  return (
    <Popup title={"Difficulty"} open={open}>
      <View>
        <Text style={stylesWithTheme.description}>
          Select the desired game difficulty. This setting affects all the mini-games in a game session.
        </Text>
        <RadioButtonsGroup
          value={difficulty}
          options={[
            { label: "Easy", name: "easy" },
            { label: "Normal", name: "normal" },
            { label: "Hard", name: "hard" },
          ]}
          onChange={setDifficulty}
        />
      </View>
      <VerticalLayout style={stylesWithTheme.footer}>
        <PrimaryButton title="Apply difficuly" />
        <BaseButton title="Cancel" onPress={toggleModal} />
      </VerticalLayout>
    </Popup>
  );
};
