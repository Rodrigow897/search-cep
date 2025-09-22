import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7F4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    alignItems: 'center',
    marginBottom: 50,
    gap: 70,
  },
  logo: {
    width: 286,
    height: 356,
  },
  titlebox: {
    alignItems: 'center',
    gap: 20,
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  input: {
    width: 290,
    height: 50,
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
  },
  button: {
    height: 50,
    width: 242,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText : {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

module.exports = { styles };