import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './HeaderSection.styles';

const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>News App</Text>
    </View>
  );
};

export default HeaderSection;
