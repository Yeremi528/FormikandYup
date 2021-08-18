import * as React from 'react';
import {View} from "react-native"
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider
} from 'native-base';
import { Formik } from 'formik';
import * as Yup from "yup"
const SignupSchema = Yup.object({
  email: Yup.string().
  required("El correo es requerrido")
  .email("No es un email valido"),
  password: Yup.string().required("Clave Requerida")
});

export default ({navigation}) => {

 return (
   <NativeBaseProvider>
     <Formik
      initialValues={{email:"",password:""}}
      validationSchema={SignupSchema}
      onSubmit={(values) =>{
        console.log(values)
      }}
      >
        {(props) =>(
        
        
        <Box
        safeArea
        flex={1}
        p={2}
        w="90%"
        mx="auto">
         <Heading size="lg" color="primary.500">
           Welcome
         </Heading>
         <Heading color="muted.400" size="xs">
           Sign up to Continue!
         </Heading>
         <VStack space={2} mt={5}>
           <FormControl >
             <FormControl.Label _text={{color:"muted.700",fontSize:"sm",
             fontWeight:"600"}}>
               Email Id
             </FormControl.Label>
             <Input autoCapitalize="none" 
             value={props.values.email} onChangeText={text=>props.setFieldValue("email",text)}/>
             <Text>{props.touched.email && props.errors.email}</Text>
           </FormControl>
           <FormControl>
             <FormControl.Label _text={{color:"muted.700", fontSize:"sm",
             fontWeight:"600"}}>
               Contrasela
             </FormControl.Label>
             <Input secureTextEntry={true}  
             value={props.values.contraseña} onChangeText={text =>props.setFieldValue("password",text)}/>
             <Link
             _text={{fontSize:"xs",fontWeight:"700",color:"cyan.500"}}
             alignSelf="flex-end"
             mt={1}>Forget Password?</Link>
           </FormControl>
           <VStack space={2}>
             <Button onPress={props.handleSubmit} colorScheme="cyan" _text={{color:"white"}}>
               Login
             </Button>
             <HStack justifyContent="center" alignItems="center">
               <IconButton
               variant="unstyled"
               startIcon={
                 <Icon
                 as={<MaterialCommunityIcons name="instagram"/>}
                 color="muted.700"
                 size="md"
                 />
               }
               />
               <IconButton
               variant="unstyled"
               startIcon={
                 <Icon
                 as={<MaterialCommunityIcons name="google"/>}
                 color="muted.700"
                 size="md"/>
               }
               />
               <IconButton
               variant="unstyled"
               startIcon={
                 <Icon
                 as={<MaterialCommunityIcons name="github"/>}
                 color="muted.700"
                 size="md"
                 />
               }
               />
             </HStack>
           </VStack>
           <HStack justifyContent="center">
             <Text fontSize="sm" color="muted.700" fontWeight={400}>
               I'm a new User.
             </Text>
             <Link onPress={()=>navigation.navigate("Register")} _text={{ color:"cyan.500",bold:true,fontSize:"sm"}} href="#">
               Sign Up
             </Link>
             
           </HStack>
         </VStack>
        </Box>
     
        )}
      </Formik>
   </NativeBaseProvider>
     
  );
}