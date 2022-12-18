import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    width: Dimensions.get('window').width / 2.2,
    borderRadius: 8,
    margin: 4,
    padding: 10,
  },
  img: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 8,
  },
  stock: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
