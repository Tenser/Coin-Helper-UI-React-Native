import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { getRanking, getPremium } from './httpRequest';
import { Item, PremiumItem } from './components';
import styles from './styles';

export function HomeScreen(){
    //console.log(Ranking)
  
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState("5");
  const [currency, setCurrency] = useState("KRW");
  const [exchange, setExchange] = useState("upbit");
  const [standard, setStandard] = useState("volume");

  const reload = function(){
    getRanking({standard: standard, unit: unit, currency: currency, exchange: exchange})
    .then(data => {
      setData(data)
    })
  }

  //reload();

  const Ranking = function(){
    
    if (data == null) {
      return (
        <View>
            <Button title='reload' onPress={reload} style={styles.button}/>
        <Item coinName="symbol" price="price" volume="volume" 
        amount="amount" increaseRate="increase" heading={true}></Item>
          <Text> Press Reload Button </Text>
        </View>
      )
    }
    if (standard == 'price'){
      return (
        <View>
            <Button title='reload' onPress={reload} style={styles.button}/>
        <Item coinName="symbol" price="price" volume="volume" 
        amount="amount" increaseRate="increase" heading={true}></Item>
      <ScrollView>
        
        {
        data.map((item, index) => (
        <Item key={index} coinName={item.coinName} price={Math.round(item.nowPrice * 1000) / 1000} volume={Math.round(item.nowVolume)} 
        amount={Math.round(item.nowAmount)} increaseRate={(Math.round((item.nowPrice / item.beforePrice - 1) * 10000) / 100).toString() + '%'}></Item>
        ))}
        <StatusBar style="auto" />

        
      </ScrollView>
      </View>
    );
    }

    return (
        <View>
            <Button title='reload' onPress={reload} style={styles.button}/>
        <Item coinName="symbol" price="price" volume="volume" 
        amount="amount" increaseRate="increase" heading={true}></Item>
      <ScrollView>
        
        {
        data.map((item, index) => (
        <Item key={index} coinName={item.coinName} price={Math.round(item.nowPrice * 1000) / 1000} volume={Math.round(item.nowVolume)} 
        amount={Math.round(item.nowAmount)} increaseRate={Math.round((item.nowVolume / item.beforeVolume - 1) * 100).toString() + '%'}></Item>
        ))}
        <StatusBar style="auto" />

        
      </ScrollView>
      </View>
    );
}

  //console.log(styles + 'sex');
  //console.log(Item + 'sex');
  //reload();
  return (
    <View style={styles.container}>

      <View style={styles.pickers}>

      <View>
        <Text> sorting </Text>
      <Picker style={styles.picker}
        selectedValue={standard}
        onValueChange={(itemValue, itemIndex) => {
          setStandard(itemValue);
        }}
      >
        <Picker.Item label="volume" value="volume" />
        <Picker.Item label="price" value="price" />
      </Picker>
      </View>
        
      <View>
        <Text> time </Text>
      <Picker style={styles.picker}
        selectedValue={unit}
        onValueChange={(itemValue, itemIndex) => setUnit(itemValue)}
      >
        <Picker.Item label="5" value="5" />
        <Picker.Item label="30" value="30" />
        <Picker.Item label="60" value="60" />
        <Picker.Item label="120" value="120" />
        <Picker.Item label="240" value="240" />
      </Picker>
      </View>

      </View>
      
      <View style={styles.pickers}>

      <View>
      <Text> currency </Text>
      <Picker style={styles.picker}
        selectedValue={currency}
        onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
      >
        <Picker.Item label="KRW" value="KRW" />
        <Picker.Item label="USDT" value="USDT" />
      </Picker>
      </View>

      <View>
      <Text> exchange </Text>
      <Picker style={styles.picker}
        selectedValue={exchange}
        onValueChange={(itemValue, itemIndex) => setExchange(itemValue)}
      >
        <Picker.Item label="upbit" value="upbit" />
        <Picker.Item label="binance" value="binance" />
      </Picker>
      </View>

      </View>

      <Ranking/>

      <StatusBar style="auto" />
      
    </View>
  );
}

export function PremiumScreen(){
    const [data, setData] = useState(null);

    const reload = function(){
        getPremium()
        .then(data => {
          setData(data);
          //console.log();
        })
      }

    const Premium = function(){
        if (data == null) {
            return (
              <View>
                 <Button title='reload' onPress={reload} style={styles.button}/>
                  <PremiumItem coinName="symbol" KoreanPrice="KoreanPrice" AmericanPrice="AmericanPrice" 
              rate="rate" heading={true}></PremiumItem>
                <Text> Press Reload Button </Text>
              </View>
            )
          }
        
          return (
              <View>
                  <Button title='reload' onPress={reload} style={styles.button}/>
                  <PremiumItem coinName="symbol" KoreanPrice="Korean" AmericanPrice="American" 
              rate="rate" heading={true}></PremiumItem>
            <ScrollView>
              
              {
              data.map((item, index) => (
              <PremiumItem key={index} coinName={item.coinName} KoreanPrice={Math.round(item.priceKorea * 1000) / 1000} AmericanPrice={Math.round(item.priceAmerica * 1000) / 1000} 
              rate={(Math.round((item.premium - 1) * 10000) / 100).toString() + '%'}></PremiumItem>
              ))}
              <StatusBar style="auto" />
                
              
            </ScrollView>
            </View>
          );
    }
    return (
        <View style={styles.container}>
        <Premium/>

        <StatusBar style="auto" />
        </View>
    )
}