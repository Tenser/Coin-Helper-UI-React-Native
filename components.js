import { Text, View } from 'react-native';
import styles from './styles';
//console.log(styles);



export function Item({coinName, price, volume, amount, increaseRate, heading}){
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
      <View style={styles.item}>
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
      </View>
    )
  } 

export function PremiumItem({coinName, KoreanPrice, AmericanPrice, rate, heading}){
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
    <View style={styles.premiumItem}>
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
    </View>
  )
}

