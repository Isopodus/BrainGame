import React, { useState } from "react";
import { Text, View } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./HomeDifficultiesModal.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { Popup } from "../../../../library/Molecules/Popup";
import { BaseButton } from "../../../../library/Atoms/Button/BaseButton";
import { RadioButtonsGroup } from "../../../../library/Molecules/RadioButtonsGroup";

export const HomeDifficultiesModal = ({ open, toggleModal, applyDifficulty }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const [difficulty, setDifficulty] = useState(0);

  return (
    <Popup title={"Difficulty"} open={open}>
      <View>
        <Text style={stylesWithTheme.description}>
          Select the desired game difficulty. This setting affects all the mini-games in a game session.
        </Text>
        <RadioButtonsGroup
          value={difficulty}
          options={[
            { label: "Easy", name: 0 },
            { label: "Normal", name: 1 },
            { label: "Hard", name: 2 },
          ]}
          onChange={setDifficulty}
        />
      </View>
      <VerticalLayout style={stylesWithTheme.footer}>
        <PrimaryButton title="Apply difficuly" onPress={() => applyDifficulty(difficulty)} />
        <BaseButton title="Cancel" onPress={toggleModal} />
      </VerticalLayout>
    </Popup>
  );
};
