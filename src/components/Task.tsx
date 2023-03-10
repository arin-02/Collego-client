import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
// import {Checkbox} from 'react-native-paper';
import {CheckBox} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

type TaskProps = {
  title: String;
  description: String;
  status: boolean;
  taskId?: String;
};
const Task = ({title, description, status}: TaskProps) => {
  const [checked, setChecked] = useState<boolean>(status);
  const toggleCheckbox = () => setChecked(!checked);
  const deleteHandler = () => {
    console.log('deleteHandler');
  };
  return (
    <ScrollView>
      <View style={styles.bigcontainer}>
        <View style={styles.insidecontainer}>
          <SafeAreaView>
            <Text style={styles.text1}>{title}</Text>
            <Text style={styles.text2}>{description}</Text>
          </SafeAreaView>
        </View>
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
        />
        <Icon
          name="delete"
          color="#fff"
          size={20}
          style={styles.deleteIcon}
          onPress={deleteHandler}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bigcontainer: {
    flex: 1,
    paddingBottom: 8,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  insidecontainer: {
    width: '70%',
  },
  deleteIcon: {backgroundColor: '#900', padding: 10, borderRadius: 100},

  text1: {
    fontSize: 20,
    marginVertical: 20,
    color: '#900',
  },
  text2: {
    color: '#4a4a4a',
  },
});

export default Task;
