import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Modal, Platform, StyleSheet, Text, View } from "react-native";
import Caret from "./icons/Caret";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Fonts } from "../styles/constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Button from "./Button";

const styles = StyleSheet.create({
  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  text: {
    color: "white",
    paddingRight: 20,
    fontFamily: Fonts.REGULAR
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default function CustomDatePicker({text, style, onSelect}) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [picked, setPicked] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setShow(false);
    setPicked(true);
    if(onSelect) onSelect(currentDate);
  };

  const openPicker = () => {
    setShow(true);
    setPicked(false);
  };

  const hideModal = () => {
    setShow(false);
    setPicked(true);
    if(onSelect) onSelect(date);
  };

  return (
    <>
      <View style={style}>
        <TouchableOpacity onPress={openPicker}>
          <View style={styles.select}>
            <Text style={styles.text}>{ picked ? `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}` : text}</Text>
            <Caret />
          </View>
        </TouchableOpacity>
      </View>

      { Platform.OS != "ios" && show && <DateTimePicker
        testID="dateTimePicker"
        mode={"date"}
        value={date}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />
      }
      { Platform.OS == "ios" && <Modal
        presentationStyle="overFullScreen"
        transparent
        visible={show}
        style={{
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
        style={{
          position: "absolute",
          bottom: 40,
          width: "100%",
          backgroundColor: Colors.WHITE,
          padding: 24
        }}>
          <DateTimePicker
            testID="dateTimePicker"
            mode={"date"}
            value={date}
            is24Hour={true}
            display="spinner"
            onChange={(evt, selectedDate) => setDate(selectedDate)}
          />
          <Button onPress={hideModal} >Listo</Button>
        </View>
      </Modal>
      }
    </>
  )
}