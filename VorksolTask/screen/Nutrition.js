import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Nutrition = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'white', marginBottom: 20}}>
        <Text
          style={{
            color: '#713711',
            fontSize: 45,
            fontWeight: '700',
            marginLeft: 30,
            marginTop: 15,
          }}>
          Nutrition
        </Text>
      </View>
      <View>
        <Image
          width={36}
          height={36}
          source={require('../assets/supermarket.png')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 10,
            color: '#713711',
            fontWeight: '700',
          }}>
          Meal
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 10,
            color: '#FF6600',
            fontWeight: '700',
          }}>
          Plans
        </Text>
      </View>

      <Text
        style={{
          fontSize: 12,
          marginTop: 10,
          marginLeft: 10,
        }}>
        Deliver your own meal plans (in PDF format) or offer prescribed meal
        plans by connecting the Evolution Nutrition add-on.
      </Text>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 10,
            color: '#713711',
            fontWeight: '700',
          }}>
          Client
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 10,
            color: '#FF6600',
            fontWeight: '700',
          }}>
          Consumption
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          marginTop: 10,
          marginLeft: 10,
        }}>
        See how all your clients are managing their nutrition in one easy view.
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: 300,
            height: 64,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FF6600',
            margin: 10,

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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
      </View>
    </ScrollView>
  );
};

export default Nutrition;

const styles = StyleSheet.create({});
