import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import ProductList from './src/screens/ProductList';

export default function App() {
  const [table, setTable] = useState(false);

  const list = [
    {id: 1, name: 'Thuốc nổ', price: 50000},
    {id: 2, name: 'Coffee', price: 35000},
    {id: 3, name: 'Ma toé', price: 40000},
    {id: 4, name: 'Cần sa', price: 40000},
    {id: 5, name: 'Thịt lợn', price: 40000},
    {id: 6, name: 'Coca-Cola', price: 40000},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Họ tên: Hoàng Việt Hùng</Text>
      <Text style={styles.text}>MSSV: PH27276</Text>
      <StatusBar style="auto" />

      {
        table
          ? <>
            <View style={styles.layout1}>
              <TextInput style={styles.table}>Tên: </TextInput>
              <TextInput style={styles.table}>Mô tả: </TextInput>
              <TextInput style={styles.table}>Link ảnh: </TextInput>
            </View>
          </>
          : null
      }
      <Button
        title={`${table ? 'Huỷ' : 'Hiện'}`}
        onPress={() => setTable(!table)}
      />

      <View style={styles.layout2}>
        <ProductList data={list} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  layout1: {
    width: 300,
    height: 170,
    borderStyle: 'solid',
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  layout2: {
    width: 300,
    height: 300,
    borderStyle: 'solid',
    borderColor: "#000000",
    borderWidth: 1,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  table: {
    width: 270,
    height: 30,
    borderStyle: 'solid',
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 5,
    fontStyle: "italic",
    marginTop: 20
  }
});
