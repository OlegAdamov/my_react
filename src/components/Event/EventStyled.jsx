import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: ${props =>
    `${props.theme.borders.dashed} ${props.theme.colors.black}`};
  // padding: ${props => props.theme.spacing * 2}px;
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => `${props.theme.radii.sm}`};
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: ${props => `${props.theme.fontSizes.s}`};
  line-height: 24px;
  font-weight: ${props => `${props.theme.fontWeights.bold}`};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(2)};
  color: ${props => `${props.theme.colors.primaryText}`};
  font-size: 16px;
  line-height: 24px;
  font-weight: ${props => `${props.theme.fontWeights.normal}`};
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: ${props => props.theme.spacing(2)};
    color: ${props => `${props.theme.colors.secondaryText}`};
  }
`;

export const Chip = styled.span`
  position: absolute;
  top: ${props => props.theme.spacing(1)};
  right: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(1, 2)};
  border-radius: ${props => `${props.theme.radii.sm}`};
  text-transform: uppercase;
  color: #fff;
  background-color: ${({ eventType, theme }) => {
    switch (eventType) {
      case 'free':
        return theme.colors.green;
      case 'paid':
        return theme.colors.blue;
      case 'vip':
        return theme.colors.red;
      default:
        return '#000';
    }
  }};
`;
