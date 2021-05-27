import * as React from 'react';
import { Image, FlatList } from 'react-native';

import { Text, View } from '../../components/Themed';
import styles from './styles';
import categories from '../../assets/data/categories';

const firstCategory = categories.items[0];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <FlatList
        horizontal={true}
          data={firstCategory.movies}
          renderItem={({item}) =>(
            <Image style={styles.image} source={{ uri: item.poster }}/>
          )}   
        />
    </View>
  );
}

export default HomeScreen;


// import HomeScreen from './Homescreen';

// export default HomeScreen;
