import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator, FlatList, Text, View, TouchableOpacity, TextInput, Alert,
    Button, StyleSheet, Image
} from 'react-native';
import axios from 'axios';

import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [id_food, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [idCategory, setIdCategory] = useState('');
    const [image, setImage] = useState('');


    let getFood = async () => {
        try {
            const response = await fetch(`${uri}/food`);
            const json = await response.json();
            setData(json.data);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const deletefood = async (id) => {
        setLoading(true);
        try {
            const response = await axios.delete(`${uri}/delete`, {
                params: {
                    id: id
                }
            }).then(response => {
                alert('da xoa');
                getFood();
            })
        }
        catch (error) {
            alert(error);
            setLoading(false);
        }
    }
    const add = async (name, description, price, idCategory, image) => {
        if(name != '' && description != '' && price!= '' && idCategory!= ''&& image != ''){
            setLoading(true);
        try {
            const response = await axios.post(`${uri}/create`, null, {
                params: {
                    name: name,
                    price: price,
                    description: description,
                    id_category: idCategory,
                    image: image,
                }
            }).then(response => {
                alert('da them');
                getFood();
            })
        }
        catch (error) {
            alert(error);
            setLoading(false);
        }
        }
        else{
            alert("Vui lòng nhập đầy đủ dữ liệu")
        }
        
    };
    const updateFood = async (id,name, description, price, idCategory, image) => {
        if(name != '' && description != '' && price!= '' && idCategory!= ''&& image != ''){
            setLoading(true);
        try {
            const response = await axios.put(`${uri}/update`, null, {
                params: {
                    id_food: id,
                    name: name,
                    price: price,
                    description: description,
                    id_category: idCategory,
                    image: image,
                }
            }).then(response => {
                alert('da sua');
                getFood();
            })
        }
        catch (error) {

            alert(error);
            setLoading(false);
        }
        }
        else{
            alert("Vui lòng nhập đầy đủ dữ liệu")
        }
        
    };

    const select =(id, name, des, pri, id_cate, img)=>{
        setId(id);
        setName(name);
        setPrice(pri+"");
        setDescription(des);
        setIdCategory(id_cate+"");
        setImage(img);
    }

    useEffect(() => {
        getFood();
    }, []);

    return (
        <View style={{ flex: 1, padding: 24, paddingTop: 10, height: 100 }}>
            <Text style={{margin: 5, padding: 5}}>ID: {id_food}</Text>
            <TextInput
                style={styles.textInput}
                value={name}
                placeholder="Name"
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.textInput}
                value={description}
                placeholder="Description"
                onChangeText={(text) => setDescription(text)}
            />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
                style={styles.cate_price_input}
                value={price}
                placeholder="Price"
                onChangeText={(text) => setPrice(text)}
            />
            <TextInput
                style={styles.cate_price_input}
                value={idCategory}
                placeholder="Id catagory"
                onChangeText={(text) => setIdCategory(text)}
            />
            </View>
            <TextInput
                style={styles.textInput}
                value={image}
                placeholder="Image"
                onChangeText={(text) => setImage(text)}
            />

<View style={styles.containerNut}>
                <TouchableOpacity style={styles.nutThem} onPress={() => add(name, description, price, idCategory, image)}>
                    <Text>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nutSua} onPress={() => updateFood(id_food, name, description, price, idCategory, image)} ><Text>UPDATE</Text></TouchableOpacity>
            </View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemFlatList} >
                            <View style={styles.containerItem}>
                                <Image
                                    style={styles.hinh}
                                    source={{uri:item.image}}></Image>
                                <View style={styles.containerMoTaItem}>
                                    <Text style={styles.textName} key={item.name}>
                                        Name: {item.name}
                                    </Text>

                                    <Text style={styles.textDes} key={item.description}>
                                        Description: {item.description}
                                    </Text>
                                    <Text key={item.price}>
                                        Price: {Intl.NumberFormat('vi-VN',{ style: 'currency', currency: 'VND' }).format(item.price)}
                                    </Text>
                                    <View style={styles.containerNut}>
                                    <TouchableOpacity style={styles.nutXoa} onPress={() => deletefood(item.id_food)}><Text>Delete</Text></TouchableOpacity>
                                    <TouchableOpacity style={styles.nutChon} onPress={()=>select(item.id_food, item.name, item.description, item.price, item.id_category, item.image)}><Text>Select</Text></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    cate_price_input: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        margin: 5,
        width: '45%'
    },
    containerNut: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nutThem: {
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        margin: 5,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    nutSua: {
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        margin: 5,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    nutXoa: {
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        margin: 5,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    nutChon: {
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        margin: 5,
        backgroundColor: 'green',
        borderRadius: 10,
    },
    itemFlatList: {
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15,
        padding: 5,
    },
    containerItem: {
        flexDirection: 'row',
    },
    hinh: {
        height: '100%',
        width: 150,
    },
    containerMoTaItem: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    textName:{
        fontWeight: 'bold',
    },
    textDes:{
        width: 190,
    },
})

export default App;
