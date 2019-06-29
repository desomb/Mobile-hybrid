import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

class Typology extends React.Component {
    getTypo = (lot) => {
        var room = new Object();
        for (let i in lot) {
            lot[i].NB_PIECES in room ? room[lot[i].NB_PIECES] += 1 : room[lot[i].NB_PIECES] = 1;
        }
        return room;
    };

    render() {
        const lot = this.props.data;
        var room = Object.entries(this.getTypo(lot));

        return (
            <View style={styles.container}>
                {
                    room.map((item, key) =>
                        (
                            <View key={key} style={styles.item}>
                                <Text>{item[0] == 1 ? 'studio          ' : item[0] + '  pièces     '}</Text><Text style={styles.amount}>   {item[1]}   </Text>
                            </View>
                        ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        width: '50%',
        flexDirection: 'row',
    },
    amount: {
        backgroundColor: '#01AC1B',
        borderRadius: 200,
    }
})

export default Typology;