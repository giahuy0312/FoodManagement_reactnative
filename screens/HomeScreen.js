
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import RecommendedFood from '../components/RecommendedFood';
import FoodCategoryBanner from '../components/FoodCategoryBanner';
import RecommendedmMeal from '../components/RecommendedMeal';
export default function HomeScreen() {
    const navigation = useNavigation();
    var recommendedFoods = [{id:5,image:require('../assets/images/steak1.jpg')},{id:3,image: require('../assets/images/seafood1.jpg')}, {id:1, image:require('../assets/images/salad.jpg')}];
    var foodCategories = [{id:5,image:require('../assets/images/steak.jpg')}, {id:3,image:require('../assets/images/seafood.jpg')}, {id:1,image:require('../assets/images/salad1.jpg')}, {id:7,iamge:require('../assets/images/burger.jpg')},{id:4,image: require('../assets/images/dessert.jpg')},{id:6,image: require('../assets/images/pizza.jpg')}];
    var recommendedMeals = [require('../assets/images/breakfast.png'), require('../assets/images/lunch.jpg'), require('../assets/images/dinner.jpg')];
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.foodSession}>
                <Text style={{
                    fontSize: 16,
                    color: 'black',
                    fontWeight: 'bold',
                    marginLeft: 10
                }}>Recommended</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={recommendedFoods}
                    renderItem={({ item }) => (<RecommendedFood scr={item.image} onPress={()=> navigation.navigate('Category Food',{screen:"Food List",initial: false,params:{id_category: item.id}})}></RecommendedFood>)}>
                </FlatList>
            </View>
            <View style={styles.foodSession}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        fontSize: 16,
                        color: 'black',
                        fontWeight: 'bold',
                        marginLeft: 10,
                        marginRight: 10
                    }}>Food Catogories</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Category Food')}>
                        <Image source={require('../assets/icons/more_icon.png')} style={{ height: 30, width: 30 }}></Image>
                    </TouchableOpacity>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={foodCategories}
                    renderItem={({ item }) => (<FoodCategoryBanner scr={item.image} onPress={()=> navigation.navigate('Category Food',{screen:"Food List",initial: false, params:{id_category: item.id}})}></FoodCategoryBanner>)}>
                </FlatList>
            </View>
            <View style={styles.foodSession}>
                <Text style={{
                    fontSize: 20,
                    color: 'black',
                    fontWeight: 'bold',
                    alignSelf: 'center'
                }}>DON'T KNOW WHAT TO EAT?</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={recommendedMeals}
                    renderItem={({ item }) => (<RecommendedmMeal scr={item}></RecommendedmMeal>)}>
                </FlatList>
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FDF4F5'

    },
    headerSession: {
        flexDirection: 'row',
        marginTop: 50,
        marginBottom: 10,
    },
    foodSession: {
        marginTop: 7,
        marginBottom: 15,
    }
});
