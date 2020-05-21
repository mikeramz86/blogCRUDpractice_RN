import React, {useContext} from 'react'
import { View, Text, StyleSheet, FlatList, Button} from 'react-native'
import BlogContext from '../context/BlogContext'


const IndexScreen = ()  => {
    const {data, addBlogPost} = useContext(BlogContext)

    return (
        <View>
            <Text> Index Screen  </Text>
            < Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={data}
                // function that call every object in arr
                keyExtractor={(blogPost) => blogPost.title}
                //function arg that has object that is equal to that object
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create ({})

export default IndexScreen