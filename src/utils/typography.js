import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import irvingTheme from 'typography-theme-irving'

fairyGateTheme.headerColor = '#fff' // was 20px.
fairyGateTheme.bodyColor = '#fff' // was 20px.
const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
