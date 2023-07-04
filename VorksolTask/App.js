import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import {encode} from 'base-64';
import FirstScreen from './screen/FirstScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Nutrition from './screen/Nutrition';

const Stack = createStackNavigator();

if (!global.btoa) {
  global.btoa = encode;
}

const App = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const imageUrlsArray = [
      // Add more image URLs as needed
      'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/04252023032040_00148466-6020-496d-879a-01edabd564d1',
      'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/01232022112248_69365b28-43e0-406f-a0ce-8e6716146f61',
      // Add more URLs that return ArrayBuffer data
    ];

    try {
      const fetches = imageUrlsArray.map(url => fetchImage(url));
      const images = await Promise.all(fetches);
      setImageData(images);
    } catch (error) {
      console.log('Error occurred while fetching images', error);
    }
  };

  const fetchImage = async url => {
    try {
      const response = await fetch(url);
      const contentType = response.headers.get('Content-Type');

      if (contentType === 'image/jpeg' || contentType === 'image/png') {
        const imageBlob = await response.blob();
        const imageUri = URL.createObjectURL(imageBlob);
        return imageUri;
      } else {
        const buffer = await response.arrayBuffer();
        const base64 = base64ArrayBuffer(buffer);
        return `data:${contentType};base64,${base64}`;
      }
    } catch (error) {
      console.log(
        `Error occurred while fetching image from URL: ${url}`,
        error,
      );
    }
  };

  const base64ArrayBuffer = arrayBuffer => {
    const bytes = new Uint8Array(arrayBuffer);
    let binary = '';

    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return btoa(binary);
  };

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image source={{uri: item}} style={styles.image} />
    </View>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Nutrition" component={Nutrition} />
      </Stack.Navigator>

      {/* commenting the NavigationContainer will show the FlatList */}
      {/* <View style={styles.container}>
        <FlatList
          data={imageData}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;

//////////////////////////////////////////

// import React, {useEffect, useState} from 'react';
// import {View, FlatList, Image, StyleSheet} from 'react-native';

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const apiData = [
//       'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/01232022112248_69365b28-43e0-406f-a0ce-8e6716146f61',
//     ];

//     const processedData = [];
//     for (const url of apiData) {
//       try {
//         const response = await fetch(url);
//         const contentType = response.headers.get('Content-Type');

//         if (contentType === 'application/octet-stream') {
//           const bufferArray = await response.arrayBuffer();
//           const base64 = btoa(
//             new Uint8Array(bufferArray).reduce(
//               (data, byte) => data + String.fromCharCode(byte),
//               '',
//             ),
//           );
//           processedData.push(`data:image/jpeg;base64,${base64}`);
//         } else if (contentType.startsWith('image/')) {
//           processedData.push(url);
//         } else {
//           console.log(
//             `Invalid URL or unsupported content type for URL: ${url}`,
//           );
//         }
//       } catch (error) {
//         console.log(`Error occurred while fetching URL: ${url}`, error);
//       }
//     }

//     setData(processedData);
//   };

//   const renderItem = ({item}) => (
//     <View style={styles.item}>
//       <Image source={{uri: item}} style={styles.image} />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(_, index) => index.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//   },
//   item: {
//     marginVertical: 10,
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//   },
// });

// export default App;
