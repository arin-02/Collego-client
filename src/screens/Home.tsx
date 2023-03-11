/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutePathList} from '../../Main';
import Task from '../components/Task';
import Icon from 'react-native-vector-icons/Entypo';
import {Dialog, Button, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {addTask, loadUser} from '../redux/Action';
import {RootState} from '../redux/Store';

type Task = {
  title: string;
  description: string;
  completed: boolean;
  _id: string;
};

type HomeNavigationProps = NativeStackNavigationProp<RoutePathList, 'HOME'>;
const Home = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const {loading, message, error} = useSelector(
    (state: RootState) => state.message,
  );
  const navigation = useNavigation<HomeNavigationProps>();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [openDialog, setOpenDialog] = useState(false);

  const {user} = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (error) {
      Alert.alert(error);
      dispatch({type: 'clearError'});
    }
    if (message) {
      Alert.alert(message);
      dispatch({type: 'clearMessage'});
    }
  }, [error, message, dispatch]);

  const hideDialog = () => {
    setOpenDialog(!openDialog);
  };

  const addTaskHandler = async () => {
    console.log(title, description);
    console.log('addTaskHandler');
    await dispatch<any>(addTask(title, description));
    dispatch<any>(loadUser());
  };

  return (
    <>
      <View>
        <ScrollView>
          <Text
            style={styles.container}
            onPress={() => navigation.navigate('LOGIN')}>
            Your's To-Do List
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: '600',
              fontStyle: 'italic',
              color: 'black',
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('LOGIN')}>
            Click Here to add Tasks
          </Text>
          {user &&
            user.tasks.map((item: Task, index: number) => (
              <Task
                key={index}
                title={item.title}
                description={item.description}
                status={item.completed}
                taskId={item._id}
              />
            ))}
        </ScrollView>
        <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>
          <Icon name="add-to-list" size={25} color="#900" />
        </TouchableOpacity>
      </View>
      <Dialog visible={openDialog} onDismiss={hideDialog}>
        <Dialog.Title>ADD A TASK</Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text onPress={hideDialog} style={{color: 'black'}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <Button
              textColor="#900"
              onPress={addTaskHandler}
              disabled={!title || !description || loading}>
              ADD
            </Button>
          </View>
        </Dialog.Content>
      </Dialog>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    fontSize: 26,
    textAlign: 'center',
    backgroundColor: '#474747',
    color: 'white',
  },
  addBtn: {
    backgroundColor: '#fff',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 20,
    elevation: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#b5b5b5',
    padding: 3,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
});
export default Home;
