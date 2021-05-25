
import React from 'react';
import {Image,Dimensions ,StyleSheet,ScrollView,TouchableOpacity,TouchableHighlight, Text, View } from 'react-native';
import post1 from '../assets/images/post1.jpg'
import post2 from '../assets/images/post2.jpg'
import post3 from '../assets/images/post3.jpg'
import mypost from '../assets/images/mypost.jpg'

import user1 from '../assets/userImages/user1.jpg'
import user2 from '../assets/userImages/user2.jpg'
import user3 from '../assets/userImages/user3.jpg'
import admin from '../assets/userImages/admin.jpg'
import rohitpic from '../assets/userImages/rohit.jpg'
import aditi from '../assets/userImages/aditi.jpg'

const adminuser = "Suyash";
const username1 = "Alex";
const username2 = "Synthia";
const username3 = "Martha";
const username4 = "Rohit";
const username5 = "Aditi";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 1/1);
const imageWidth = dimensions.width;


import IconFeather from 'react-native-vector-icons/Feather';  

import IconFasw from 'react-native-vector-icons/FontAwesome';  

const openStory = () => {
  alert("You user Viewed his Story !")
  // do something
};

const postLiked = ()=>{
  alert("You liked this Post !")
}

const postComment = ()=>{
  alert("You Commented on this Post !")
}

const postSend = ()=>{
  alert("You Sent this Post !")
}


export default class HomeScreen extends React.Component {  
  render() {  
    return (  

      <View style={styles.container}>

        <View style={styles.head}>
          <Text style={styles.headText}>Instagram</Text>
        
        </View>
        

      
      

      <ScrollView showsVerticalScrollIndicator={false}>

          {/* Story Container*/}
        <ScrollView showsHorizontalScrollIndicator={false}
           horizontal={true} style={styles.storyContainer}>  
          
          <View  style={styles.storyView}>  
              <TouchableOpacity 
                onPress={openStory}
                style={styles.storyButtom}>
                  <Image source={admin} style={styles.userstoryImg}/>
              </TouchableOpacity>  
              <Text >Your Story</Text>
          </View> 
    
          <View  style={styles.storyView}>  
              <TouchableOpacity style={styles.storyButtom} onPress={openStory}>
              <Image source={user1} style={styles.userstoryImg}/>
              </TouchableOpacity>  
              <Text >{username1}</Text>
          </View> 

          <View  style={styles.storyView}>  
              <TouchableOpacity style={styles.storyButtom} onPress={openStory}>
                <Image source={rohitpic} style={styles.userstoryImg}/></TouchableOpacity>  
                
              <Text >{username4}</Text>

          </View> 
    
          <View  style={styles.storyView}>  
              <TouchableOpacity style={styles.storyButtom} onPress={openStory}>
                <Image source={aditi} style={styles.userstoryImg}/></TouchableOpacity>  
              <Text >{username5}</Text>
          </View> 
    
          <View  style={styles.storyView}>  
              <TouchableOpacity style={styles.storyButtom} onPress={openStory}>
              <Image source={user2} style={styles.userstoryImg}/>
              </TouchableOpacity>  
              <Text >{username2}</Text>
          </View> 
    
          <View  style={styles.storyView}>  
              <TouchableOpacity style={styles.storyButtom} onPress={openStory}>
              <Image source={user3} style={styles.userstoryImg}/>
              </TouchableOpacity>  
              <Text >{username3}</Text>
          </View> 
    
          
    
          </ScrollView>
    

          {/*Posts  */}
        <View style={styles.postContainer}> 
          <View style={styles.postUser}>
            <TouchableOpacity style={styles.userpic}>
              <Image source={user1} style={styles.userpostImg}/>
            </TouchableOpacity> 
            <Text style={styles.userName}>{username1}</Text>
          </View>

          <Image source={post1} style={styles.postimg} />  

          <Text></Text>
          
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.pactions} onPress={postLiked}>
              <IconFeather  size={28} name={'heart'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pactions} onPress={postComment}>
              <IconFasw  size={28} name={'comment-o'}/>
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.pactions} onPress={postSend}>
              <IconFeather  size={28} name={'send'}/>
            </TouchableOpacity>
            
          </View>

          

        </View>

        <View style={styles.postContainer}> 
          <View style={styles.postUser}>
          <TouchableOpacity  style={styles.userpic}> 
            <Image source={user2} style={styles.userpostImg}/>
          </TouchableOpacity> 
          <Text style={styles.userName}>{username2}</Text>
          </View>
          <Image source={post2} style={styles.postimg} />  
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.pactions} onPress={postLiked}>
              <IconFeather  size={28} name={'heart'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pactions} onPress={postComment}>
              <IconFasw  size={28} name={'comment-o'}/>
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.pactions} onPress={postSend}>
              <IconFeather  size={28} name={'send'}/>
            </TouchableOpacity>
            
          </View>

        </View>


        <View style={styles.postContainer}> 
          <View style={styles.postUser}>
          <TouchableOpacity 
          style={styles.userpic}> 
          <Image source={admin} style={styles.userpostImg}/>
          </TouchableOpacity> 
          <Text style={styles.userName}>{adminuser}</Text>
          </View>
          <Image source={mypost} style={styles.postimg} />  
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.pactions} onPress={postLiked}>
              <IconFeather  size={28} name={'heart'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pactions} onPress={postComment}>
              <IconFasw  size={28} name={'comment-o'}/>
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.pactions} onPress={postSend}>
              <IconFeather  size={28} name={'send'}/>
            </TouchableOpacity>
            
          </View>

        </View>




        <View style={styles.postContainer}> 
          <View style={styles.postUser}>
          <TouchableOpacity 
          style={styles.userpic}> 
          <Image source={user3} style={styles.userpostImg}/>
          </TouchableOpacity> 
          <Text style={styles.userName}>{username3}</Text>
          </View>
          <Image source={post3} style={styles.postimg} />  
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.pactions} onPress={postLiked}>
              <IconFeather  size={28} name={'heart'}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.pactions} onPress={postComment}>
              <IconFasw  size={28} name={'comment-o'}/>
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.pactions} onPress={postSend}>
              <IconFeather  size={28} name={'send'}/>
            </TouchableOpacity>
            
          </View>

        </View>


      </ScrollView>


      </View>
    );  
  }  
} 


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        
        marginTop:20
      
    },

    head:{
      padding:10,
     
    },

  

    headText:{
      fontSize:25,
      
  
    },

    storyContainer:{
      height:120,
     
  
      
  
    },


    postContainer:{
      marginBottom:20,
     
    },


    storyView:{
      margin:20,
      marginRight:0,
      alignItems: 'center',
      
    },

    userstoryImg: {
      width: 60,
      height: 60,
    },


    storyButtom:{
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      overflow:'hidden',
      borderRadius: 100,
      backgroundColor: 'black',

      borderWidth: 3,
      borderColor: "#f542ad"
    },

    postUser:{
      flex:1,
      flexDirection:'row',
      margin:10,
     
    },
    userpostImg: {
      
      height: 30,
      width: 30,
     
    },

    userName:{
      fontSize:18,
      fontWeight:'400'
      
    },
    userpic:{
      width: 30,
      height: 30,
      
      overflow:'hidden',
      borderRadius: 100,
      backgroundColor: 'black',
      marginRight:10,
    },

    postcaption:{
      fontSize:15,
      fontWeight:'bold',
    },

    postActions:{
      flex:1,
      flexDirection:'row',
      margin:10,
      marginTop:0,
    },

    pactions:{
      margin:5,
    },

    postimg:{ width: 389, height: 389 },

  });