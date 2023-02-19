import styled from "styled-components"

const Banner = styled.div`
  background-color: var(--color-background-primary);
  padding: calc(var(--baseline-grid) * 3);
`

const HeaderText = styled.header`
  align-items: baseline;
  color: var(--color-foreground-primary);
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
  gap: calc(var(--baseline-grid) * 2);
  line-height: 1.2;
  margin-inline: auto;
  max-width: var(--container-width);
  width: 100%;
`

export const Header = () => (
  <Banner>
    <HeaderText>
      {/* <img src={roadMapIcon} alt="road map icon" height={24} width={24} /> */}
      Tibia Travel
    </HeaderText>
  </Banner>
)
