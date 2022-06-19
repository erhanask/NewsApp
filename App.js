import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import NewsCard from './src/components/NewsCard';
import HeaderSection from './src/components/HeaderSection';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
const App = () => {
  const renderItem = ({item}) => <NewsCard news={item} />;
  const keyExtractor = item => item.u_id.toString();

  return (
    <SafeAreaView>
      <HeaderSection></HeaderSection>
      <View style={styles.sectionContainer}>
        <FlatList
          ListHeaderComponent={() => (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {news_banner_data.map(bannerNews => (
                <Image
                  style={styles.bannerImage}
                  source={{uri: bannerNews.imageUrl}}
                />
              ))}
            </ScrollView>
          )}
          keyExtractor={keyExtractor}
          data={news_data}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#eceff1',
    paddingTop: 20,
  },
  bannerImage: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width,
    paddingBottom: 15,
  },
});

export default App;
