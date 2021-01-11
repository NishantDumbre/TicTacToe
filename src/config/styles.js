import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  box: {
    width: wp(33),
  },

  buttonText: {
    color: 'white',
    fontSize: hp(3),
  },

  card: {
    height: hp(18),
    justifyContent: 'center',
    alignItems: 'center',
  },

  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp(2),
  },

  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginTop: hp(3),
    backgroundColor: '#4652B3',
    paddingVertical: hp(1.5),
    marginVertical: hp(1.5),
  },

  title: {
    alignSelf: 'center',
  },
});

export default styles;
