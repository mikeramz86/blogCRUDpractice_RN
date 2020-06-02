import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  //state to handle title entry
  const [title, setTitle] = useState(initialValues.title)
  //state to handle content entry
  const [content, setContent] = useState(initialValues.content)
  return (
    <View>
      <Text style={styles.label}> Enter Title: </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}> Enter Content: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
})

export default BlogPostForm
