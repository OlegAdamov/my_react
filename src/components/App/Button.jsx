import styled from '@emotion/styled';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p =>
    p.disabled ? p.theme.colors.black : p.theme.colors.primary};
  color: ${p => p.theme.colors.muted};
  cursor: pointer;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {Icon && <Icon size="16" />}
      {children}
    </StyledButton>
  );
};
