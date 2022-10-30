import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Feather, FontAwesome5} from "@expo/vector-icons";

const Detail = ({navigation, route}) => {

    return (
        <View style={{flex: 1, width: "100%", position: "relative"}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Feather name={'x-circle'} style={styles.btn_close}/>
                </TouchableOpacity>
            </View>
            <View style={{width: "100%", height: 1, backgroundColor: "#888", marginVertical: 8,}}/>
            <ScrollView vertical showsVerticalScrollIndicator={false} style={{paddingHorizontal: 20,}}>
                <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{width: "48%"}}>
                        <Image source={route.params.image} style={{width: 170, height: 170, resizeMode: "contain"}}/>
                    </View>
                    <View style={{width: "48%", display: "flex", justifyContent: "flex-end", alignItems: 'center'}}>
                        <Image source={require('../assets/plant_vector.png')}
                               style={{width: 30, height: 30, resizeMode: "contain"}}/>
                        <Text style={{fontSize: 25, fontWeight: "bold", marginTop: 5,}}>{route.params.name}</Text>
                        <Text>Botanical Name : <Text style={{width: "100%"}}>{route.params.batonical}</Text></Text>
                    </View>
                </View>
                <View style={{marginTop: 10,}}>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Compost Type(s) :</Text>
                </View>
                <View style={{marginTop: 5,}}>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Aerobic
                        composting</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Brown compost (dry
                        leaves and twigs)</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Coffee grounds or tea
                        bags compost</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Garden compost fresh
                        clippings</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Grass compost fresh
                        clippings</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Green leaves
                        compost</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Mushroom compost</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Garden compost fresh
                        clippings</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Grass compost fresh
                        clippings</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Green leaves
                        compost</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Mushroom compost</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Straw or hay
                        compost</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Vegetable and fruit
                        scraps compost</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Vegetable peelings
                        nitrogen-rich compost</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Vermicomposting worms,
                        non-acidic vegetable and fruit scraps</Text>
                    <Text style={styles.list_item}><FontAwesome5 name={'dot-circle'}
                                                                 style={styles.dot}/>&nbsp;&nbsp;Wood chip or sawdust
                        compost</Text>
                </View>
                <View style={{marginTop: 10,}}>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Nutrients :</Text>
                    <Text style={{ marginTop : 5, }}>{ route.params.nutrients }</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Soil Type :</Text>
                    <Text style={{ marginTop : 5, }}>{ route.params.soil }</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Watering Instructions :</Text>
                    <Text style={{ marginTop : 5, }}>{ route.params.water }</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Temperature :</Text>
                    <Text style={{ marginTop : 5, }}>{ route.params.temp }</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Moisture Content :</Text>
                    <Text style={{ marginTop : 5, }}>{ route.params.mois }</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Practical Size :</Text>
                    <Text style={{ marginTop : 5, }}>{ route.params.practical }</Text>
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 45,
    },
    btn_close: {
        fontSize: 25,
        color: "#333",
    },
    dot: {
        fontSize: 10,
        color: "#555",
    },
    list_item: {}
})

export default Detail;
