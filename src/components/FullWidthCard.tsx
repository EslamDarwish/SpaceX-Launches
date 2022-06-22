import {Dimensions, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';
import {Card} from 'react-native-elements';

export class FullWidthCard extends PureComponent {
  render() {
    const {children} = this.props;
    return <Card containerStyle={styles.cardContainer}>{children}</Card>;
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
    height: 100,
  },
});

export default FullWidthCard;
