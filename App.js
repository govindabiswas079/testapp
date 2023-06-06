import React, { Fragment, useState } from 'react'
import { View, Text, Button, StatusBar, ScrollView, TextInput, Pressable } from 'react-native'

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState({ name: '' })

  const onAdd = () => {

    setTimeout(() => {
      setData([...data, { name: value?.name }])
      setValue({ ...value, name: '' })
    }, 2000);
  };


  console.log(data)

  return (
    <Fragment>
      <StatusBar translucent={false} animated={true} barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <ScrollView>
        <View style={{ elevation: 3, marginHorizontal: 15 }}>
          <TextInput value={value?.name} onChangeText={(event) => setValue({ ...value, name: event })} placeholderTextColor={'gray'} placeholder='Name' style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderStyle: 'solid', borderRadius: 5, color: '#000000', fontSize: 14, paddingHorizontal: 10 }} />
          <Pressable onPress={() => onAdd()} style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', borderRadius: 5, marginTop: 5 }}>
            <Text style={{ color: "#FFFFFF", fontSize: 16, fontWeight: '600' }}>ADD</Text>
          </Pressable>
        </View>

        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          {!data?.length ?
            <View style={{ backgroundColor: '#FFFFFF', elevation: 3, padding: 10 }}>
              <Text style={{ color: '#000000', fontSize: 18, fontWeight: '700' }}>
                No Data
              </Text>
            </View>
            :
            data.map((value, index) => (

              <View key={index} style={{ backgroundColor: '#FFFFFF', elevation: 3, padding: 10 }}>
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: '700' }}>
                  name: {value?.name}
                </Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </Fragment>
  )
}

export default App