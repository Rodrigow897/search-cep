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

  adressContainer: {
  alignItems: "center",
  gap: 10,
  borderRadius: 20,
  padding: 20,
  width: "90%",
  overflow: "hidden", 
  backgroundColor: "rgba(255, 255, 255, 0.5)",

  
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.3,
  shadowRadius: 20,


  elevation: 10,
},
   blurContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.2,
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
  inputBox: {
    alignItems: 'center',
    gap: 30,
    marginBottom: 50,
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
    shadowColor: "#23205fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText : {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  textAdress: {
    fontSize: 16,
    color: '#000',
    fontWeight: 500,
  }
});