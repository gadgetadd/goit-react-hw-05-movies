import PropTypes from "prop-types"
import { Title } from "./PageTitle.styled"

export default function PageTitle({ title }) {
    return <Title>{ title}</Title>
}
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
