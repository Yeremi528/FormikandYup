import React from "react"

import {Form, Formik} from "formik"
import * as yup from "yup"
import { Box, Heading, NativeBaseProvider, VStack,
 FormControl,Input,Link,Button,Icon,IconButton,HStack,Divider} from "native-base"
 import {Text} from "react-native"



const SchemaValidation = yup.object({
    name: yup.string().required("El nombre es obligatorio"),
    email: yup.string()
        .email("No es un email valido")
        .required("Email Tiene que ser ingresado"),
    password: yup.string()
        .required("La clave es requerida")
        .oneOf([yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
    repeatPassword: yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([yup.ref("password")], "Las contraseñas no son iguales"),
})

export default ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <Formik
                initialValues={{ email: "", name: "", password: "", repeatPassword: "" }}
                validationSchema={SchemaValidation}
                onSubmit={(values) => {
                    console.log(values)

                }}
            >
                {(props) => (
                   <Box
                   safeArea
                   mx="auto"
                   flex={1}
                   w="90%"
                   p={2}>
                       <Heading size="lg" color="primary.500">
                           Welcome to Register
                       </Heading>
                       <VStack space={2} mt={5}>
                           <FormControl>
                               <FormControl.Label _text={{color:"muted.700",fontSize:"sm",fontWeight:600}}>
                                   Name
                               </FormControl.Label>
                               <Input autoCapitalize="none"
                               value={props.values.name} onChangeText={text =>props.setFieldValue("name",text)}/>
                               <Text>{props.touched.name && props.errors.name}</Text>
                           </FormControl>
                           <FormControl>
                               <FormControl.Label _text={{color :"muted.700", fontSize:"sm",
                               fontWeight:600}}>
                                   Email
                               </FormControl.Label>
                               <Input autoCapitalize="none"
                               value={props.values.email} onChangeText={text => props.setFieldValue("email",text)}/>
                                <Text>{props.touched.email && props.errors.email}</Text>
                           </FormControl>
                           <FormControl>
                               <FormControl.Label _text={{color:"muted.700", fontSize:"sm",
                               fontWeight:600}}>Password</FormControl.Label>
                               <Input secureTextEntry={true} autoCapitalize="none"
                               value={props.values.password} onChangeText={text => props.setFieldValue("password",text)}/>
                               <Text>{props.touched.password && props.errors.password}</Text>
                           </FormControl>
                           <FormControl>
                               <FormControl.Label _text={{color:"muted.700" , fontSize:"sm",fontWeight:600}}>
                                   Repeat Password
                               </FormControl.Label>
                               <Input secureTextEntry={true} autoCapitalize="none"
                                value={props.values.repeatPassword} onChangeText={text => props.setFieldValue("repeatPassword",text)}/>
                              <Text>{props.touched.repeatPassword && props.errors.repeatPassword}</Text>
                           </FormControl>
                           <VStack>

                           </VStack>
                           <Button size="lg" onPress={props.handleSubmit}>
                               Crear Cuenta
                           </Button>
                            <Button size="sm"   onPress={() =>navigation.navigate("Login")}>
                                Already I have one account
                            </Button>
                       </VStack>
                   </Box>

                )}</Formik>
        </NativeBaseProvider>
    )
}