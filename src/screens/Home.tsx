import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutePathList} from '../../Main';
import Task from '../components/Task';
import Icon from 'react-native-vector-icons/Entypo';
import {Dialog, Button, TextInput} from 'react-native-paper';

type HomeNavigationProps = NativeStackNavigationProp<RoutePathList, 'HOME'>;
const Home = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [openDialog, setOpenDialog] = useState(false);
  const hideDialog = () => {
    setOpenDialog(!openDialog);
  };
  const addTaskHandler = () => {
    console.log(title, description);
    console.log('addTaskHandler');
  };
  const navigation = useNavigation<HomeNavigationProps>();
  const tasks = [
    {
      title: 'Title1',
      description: 'description1',
      completed: false,
      _id: 'taskId1',
    },
    {
      title: 'Title2',
      description: 'description2',
      completed: true,
      _id: 'taskId2',
    },
  ];
  return (
    <>
      <View>
        <ScrollView>
          <Text
            style={styles.container}
            onPress={() => navigation.navigate('LOGIN')}>
            All Tasks
          </Text>
          {tasks.map((item, index) => (
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
              <Text onPress={hideDialog}>Cancel</Text>
            </TouchableOpacity>
            <Button textColor="#900" onPress={addTaskHandler}>
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
