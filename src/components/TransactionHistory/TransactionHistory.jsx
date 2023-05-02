import PropTypes from 'prop-types';
import {
    StyledTable,
    StyledHeader,
    StyledColumn,
    StyledBody,
    StyledRow,
    StyledCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <StyledTable>
            <StyledHeader>
                <StyledRow>
                    <StyledColumn>Type</StyledColumn>
                    <StyledColumn>Amount</StyledColumn>
                    <StyledColumn>Currency</StyledColumn>
                </StyledRow>
            </StyledHeader>

            <StyledBody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <StyledRow key={id}>
                            <StyledCell>{type}</StyledCell>
                            <StyledCell>{amount}</StyledCell>
                            <StyledCell>{currency}</StyledCell>
                        </StyledRow>
                    );
                })}
            </StyledBody>
        </StyledTable>
    );
};

TransactionHistory.defaultProps = {
    items: [],
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};