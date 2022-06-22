import {Dimensions, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  onPress?: () => void;
}

export class FullWidthCard extends PureComponent<Props, {}> {
  render() {
    const {children, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Card containerStyle={styles.cardContainer}>{children}</Card>
      </TouchableOpacity>
    );
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
