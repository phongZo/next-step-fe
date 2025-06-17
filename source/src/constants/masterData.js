import { defineMessages } from 'react-intl';
import {
    BOOKING_STATE_APPROVE,
    BOOKING_STATE_BOOKING,
    BOOKING_STATE_CANCEL,
    BOOKING_STATE_DONE,
    BOOKING_STATE_PAID,
    BOOKING_STATE_WORKING,
    ORDER_PAYMENT_METHOD_CARD,
    ORDER_PAYMENT_METHOD_CASH,
    SALARY_PERIOD_DETAIL_STATE_PAID,
    SALARY_PERIOD_DETAIL_STATE_UNPAID,
    STATUS_ACTIVE,
    STATUS_LOCK,
    STATUS_PENDING,
} from '@constants';

import { dayOfWeek } from './intl';

const commonMessage = defineMessages({
    active: 'Active',
    pending: 'Pending',
    lock: 'Lock',
    approved: 'Approved',
    reject: 'Reject',
    payed: 'Payed',
    unpay: 'Unpay',
    card: 'Card',
    cash: 'Cash',
    booking: 'Booking',
    paid: 'Paid',
    working: 'Working',
    done: 'Done',
    cancel: 'Cancel',
});

export const languageOptions = [
    { value: 1, label: 'EN' },
    { value: 2, label: 'VN' },
    { value: 3, label: 'Other' },
];

export const orderOptions = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
];

export const commonStatus = [
    { value: STATUS_ACTIVE, label: 'Kích hoạt', color: 'green' },
    { value: STATUS_PENDING, label: 'Đang chờ', color: 'warning' },
    { value: STATUS_LOCK, label: 'Đang khóa', color: 'red' },
];

export const statusOptions = [
    { value: STATUS_ACTIVE, label: commonMessage.active, color: 'green' },
    { value: STATUS_PENDING, label: commonMessage.pending, color: 'warning' },
    { value: STATUS_LOCK, label: commonMessage.lock, color: 'red' },
];

export const salaryPeriodDetailState = [
    { value: SALARY_PERIOD_DETAIL_STATE_UNPAID, label: commonMessage.unpay, color: 'red' },
    { value: SALARY_PERIOD_DETAIL_STATE_PAID, label: commonMessage.payed, color: 'green' },
];

export const productKinds = {
    SINGLE: 1,
    COLLECTION: 2,
};

export const daysOfWeekSchedule = [
    { value: 0, label: dayOfWeek.monday },
    { value: 1, label: dayOfWeek.tuesday },
    { value: 2, label: dayOfWeek.wednesday },
    { value: 3, label: dayOfWeek.thursday },
    { value: 4, label: dayOfWeek.friday },
    { value: 5, label: dayOfWeek.saturday },
    { value: 6, label: dayOfWeek.sunday },
];

export const paymentMethodState = [
    { value: ORDER_PAYMENT_METHOD_CASH, label: commonMessage.cash, color: 'blue' },
    { value: ORDER_PAYMENT_METHOD_CARD, label: commonMessage.card, color: 'green' },
];

export const bookingState = [
    { value: BOOKING_STATE_BOOKING, label: commonMessage.booking, color: 'green' },
    { value: BOOKING_STATE_WORKING, label: commonMessage.working, color: 'blue' },
    { value: BOOKING_STATE_DONE, label: commonMessage.done, color: '#168E85' },
    { value: BOOKING_STATE_CANCEL, label: commonMessage.cancel, color: 'red' },
];