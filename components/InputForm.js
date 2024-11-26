import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const InputForm = () => {
  return (
    // keyboardAvoidingView는 키보드가 다른 버튼이같은거를 안가리게 하기위해
    <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.addFormcontainer}>
        <TextInput 
            style={styles.inputField}
            placeholder="할 일을 작성해주세요."
        />
        <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText} >+</Text>
        </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({
    addFormcontainer: {
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 30,
        paddingHorizontal: 20,
        backgroundColor: '#f7f8fa'
    },
    inputField: {
        flex: 1,
        height: 42,
        padding: 5,
        marginRight : 25,
        borderRadius: 4,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
        color: '#000000',
        fontSize: 15,
        textAlignVertical: 'center', //수직
    },
    addButton: {
        justifyContent : 'center',
        alignItems : 'center', //교차축
        width: 42,
        height: 42,
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,0.7)',
        shadowColor: '#000',
        shadowOpacity: 0.14,
        shadowRadius: 8,
        shadowOffset: { 
            width: 0, 
            height: 4 
        },

    },
    addButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
})