import { LinkingContext } from "@react-navigation/native";
import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import PostFooter from "./PostFooter";

export default function Post({post}) {

    const PostHeader = ({post}) => (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{ uri: post.profile_picture}} style = {styles.profile_pic}/>
                <Text style={{color: 'black', marginLeft:5, fontWeight:'600'}}> {post.user} </Text>
            </View>
        </View>
    )
    
    const PostImage = ({post}) => (
        <View style={{width:'100%', height: 350}}>
            <Image source={{uri: post.imageUrl}} style={{height: '100%', resizeMode: 'cover'}} />
        </View>
    )
        
    return (
        <View style={{ marginBottom: 10}}>
            <PostHeader post={post} />
            <PostImage post={post} />

            <PostFooter post={post} />
        </View>
    )
}

const styles = StyleSheet.create({
    profile_pic: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: 'black'
    },

    footer_icon: {
        width:33,
        height:33,
    }
})
