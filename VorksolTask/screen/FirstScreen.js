import {
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const FirstScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text
        style={{color: '#713711', marginTop: 30, fontSize: 20, marginLeft: 48}}>
        Welcome
      </Text>
      <Text
        style={{
          color: '#713711',
          fontWeight: 'bold',
          fontSize: 25,
          marginLeft: 48,
        }}>
        Mr. Steve,
      </Text>

      <Text
        style={{
          color: '#713711',
          fontWeight: 'bold',
          fontSize: 45,
          marginLeft: 38,
          marginTop: 40,
        }}>
        Choose your
      </Text>
      <Text
        style={{
          color: '#FF6600',
          fontWeight: 'bold',
          fontSize: 45,
          marginLeft: 38,
        }}>
        focus
      </Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.roundView}>
          <View style={styles.row}>
            <Image
              width={36}
              height={36}
              source={require('../assets/Vector.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginLeft: 10,
                color: '#FF6600',
              }}>
              Training
            </Text>
          </View>
        </View>

        <View View style={styles.roundView}>
          <View style={styles.row}>
            <Image
              width={36}
              height={36}
              source={require('../assets/Vector.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginLeft: 10,
                color: '#FF6600',
              }}>
              Video Coaching
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Nutrition')}
          style={{
            width: 300,
            height: 64,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FF6600',
            marginTop: 25,

            ...Platform.select({
              ios: {
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 4,
              },
              android: {
                elevation: 4,
              },
            }),
          }}>
          <View style={styles.row}>
            <Image
              width={36}
              height={36}
              source={require('../assets/Vector2.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginLeft: 10,
                color: 'white',
              }}>
              Nutrition
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.roundView}>
          <View style={styles.row}>
            <Image
              width={36}
              height={36}
              source={require('../assets/Vector3.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                marginLeft: 10,
                color: '#FF6600',
              }}>
              Client Communication
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  roundView: {
    width: 300,
    height: 64,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 25,

    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
