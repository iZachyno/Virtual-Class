import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
  //*
  container: {
    flex: 1,
    backgroundColor: '#000015',
  },
  Text: {
    fontSize: 15+5,
    color: '#fffffe',
  },
  //Header
  Header: {
    flex: 1,
    backgroundColor: '#fffffe',
  },
  HeaderRadius: {
    flex: 1,
    borderBottomLeftRadius: 75,
    backgroundColor: '#000015',
  },
  //Body
  Body: {
    flex: 3.5,
    backgroundColor: '#000015',
  },
  BodyRadius: {
    marginRight: 11,
    flex: 1,
    borderTopRightRadius:111-6,
    borderBottomLeftRadius: 54,
    borderBottomRightRadius: 54,
    backgroundColor: '#FFFFFE',
  },
  Grades: {
    flex: 1,
    color: '#19284187',
    fontWeight: 'bold'
  },
  GradeBG: {
    marginTop: 31-13,
    flex: 1 ,
    borderRadius: 9, 
    borderColor: '#222',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  //Footer
  Footer: {
    flex: .5,
    flexDirection: 'row',
  },
});
