import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
//import { Detail } from './screens'
//console.log(styles);



export function Item({coinName, price, volume, amount, increaseRate, heading}){
    const navigation = useNavigation();
    if (heading){
      return (
        <View style={styles.itemHeading}>
          <Text style={styles.heading}>
            {coinName}
          </Text>
          <Text style={styles.heading}>
            {price}
          </Text>
          <Text style={styles.heading}>
            {volume}
          </Text>
          <Text style={styles.heading}>
            {amount}
          </Text>
          <Text style={styles.heading}>
            {increaseRate}
          </Text>
        </View>
      )
    }
    return (
      <TouchableOpacity style={styles.item} onPress={() => {
        navigation.navigate('Detail', { coinName: coinName });
      }}>
        <Text style={styles.information}>
          {coinName}
        </Text>
        <Text style={styles.information}>
          {price}
        </Text>
        <Text style={styles.information}>
          {volume}
        </Text>
        <Text style={styles.information}>
          {amount}
        </Text>
        <Text style={styles.information}>
          {increaseRate}
        </Text>
      </TouchableOpacity>
    )
  } 

export function PremiumItem({coinName, KoreanPrice, AmericanPrice, rate, heading}){
  const navigation = useNavigation();
  if (heading){
    return (
      <View style={styles.premiumItemHeading}>
        <Text style={styles.premiumHeading}>
          {coinName}
        </Text>
        <Text style={styles.premiumHeading}>
          {KoreanPrice}
        </Text>
        <Text style={styles.premiumHeading}>
          {AmericanPrice}
        </Text>
        <Text style={styles.premiumHeading}>
          {rate}
        </Text>
      </View>
    )
  }
  return (
    <TouchableOpacity style={styles.premiumItem} onPress={() => {
      navigation.navigate('Detail', { coinName: coinName });
    }}>
      <Text style={styles.premiumInformation}>
        {coinName}
      </Text>
      <Text style={styles.premiumInformation}>
        {KoreanPrice}
      </Text>
      <Text style={styles.premiumInformation}>
        {AmericanPrice}
      </Text>
      <Text style={styles.premiumInformation}>
        {rate}
      </Text>
    </TouchableOpacity>
  )
}

export function SearchItem({coinName, currency, exchange}){
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.premiumItem} onPress={() => {
      navigation.navigate('Detail', { coinName: coinName });
    }}>
      <Text style={styles.premiumInformation}>
        {coinName}
      </Text>
      <Text style={styles.premiumInformation}>
        {currency}
      </Text>
      <Text style={styles.premiumInformation}>
        {exchange}
      </Text>
    </TouchableOpacity>
  )
}

const unit = [5, 30, 60, 120, 240];

export function DetailItem({dto}){
  if (dto.heading){
    return (
      <View style={styles.detailItem3}>
      <Text style={styles.detailInformation3}>
        {dto.nowPrice} 
      </Text>
      <Text style={styles.detailInformation3}>
        {dto.nowVolume} 
      </Text>
      <Text style={styles.detailInformation3}>
        {dto.nowAmount}
      </Text>
    </View>
    )
  }
  return (
      <View style={styles.detailItem2}>
        <Text style={styles.detailInformation2}>
        time
      </Text>
      <Text style={styles.detailInformation2}>
        {dto.nowPrice} 
      </Text>
      <Text style={styles.detailInformation2}>
        {dto.nowVolume} 
      </Text>
      <Text style={styles.detailInformation2}>
        {dto.nowAmount}
      </Text>
    </View>
    )
}

export function DetailItem2 ({dto, index}){
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailInformation}>
        {unit[index]}
      </Text>
      <View style={styles.detailInformation}>
      <Text style={{fontSize: 10, width: 90}}>{dto.nowPrice} </Text>
      <Text style={{fontSize: 10, width: 90}}> ( {(Math.round((dto.nowPrice / dto.beforePrice - 1) * 10000) / 100).toString() + '%'} )  </Text>
      </View>
      <View style={styles.detailInformation}>
      <Text style={{fontSize: 10, width: 90}}> {dto.nowVolume}  </Text>
      <Text style={{fontSize: 10, width: 90}}> ( {(Math.round((dto.nowVolume / dto.beforeVolume - 1) * 10000) / 100).toString() + '%'} )  </Text>
      </View>
      <Text style={styles.detailInformation}>
        {dto.nowAmount}
      </Text>
    </View>
  )
}


export function DetailItemList({data}){
  return (
    <ScrollView>
      
    {data.map((item, index) => (
      //console.log(item);
      
      <View style={styles.detailList} key={index}>
        <DetailItem dto={{nowPrice: item.coinName, nowVolume: item.currency, nowAmount: item.exchange, heading: true}}></DetailItem>
        <DetailItem dto={{nowPrice: "price", nowVolume: "volume", nowAmount: "amount", heading: false}}></DetailItem>
      {item.dtos.map((dto, index) => (
        <DetailItem2 key={index} dto={dto} index={index}>
        </DetailItem2>
      ))}
      </View>
    ))}
    </ScrollView>
  )
}

