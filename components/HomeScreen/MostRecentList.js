import { View, Pressable, Image } from 'react-native';
import ListContainer from '../ListScreen/ListContainer';
import { MainText, SubText, TitleText } from '../../utils/styles/typography';
import { useSelector } from 'react-redux';
import parseDateTime from '../../utils/functions/parseDataTime';
import getCatImage from '../../utils/functions/getCatImage';
import styled from 'styled-components/native';

const CardImage = styled.Image`
  width: 50px;
  height: 50px;
  right: ${(props) => props.right || 0};
`;

const MostRecentList = ({ navigation }) => {
  const listGroup = useSelector((state) => state.listGroup).reverse();
  const firstList = listGroup[0];
  return (
    <View style={{ flex: 1, marginTop: 16 }}>
      <Pressable onPress={() => navigation.navigate('List')}>
        <ListContainer>
          <TitleText marginBottom="16px">{firstList.name}</TitleText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
          >
            <SubText>
              {parseDateTime(firstList.date)[1] +
                ' ' +
                parseDateTime(firstList.date)[2] +
                ' ' +
                parseDateTime(firstList.date)[3]}
            </SubText>
            <SubText>{`${firstList.list.length} Items`}</SubText>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {firstList.list.map((listItem, i) => {
              return (
                <CardImage
                  source={getCatImage(listItem.listItemCategory)}
                  style={{ zIndex: i }}
                  right={i === 0 ? 0 : i * 30 + 'px'}
                  key={i}
                />
              );
            })}
          </View>
        </ListContainer>
      </Pressable>
    </View>
  );
};

export default MostRecentList;
