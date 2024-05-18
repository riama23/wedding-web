import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat';
import 'dayjs/locale/es';
import 'dayjs/locale/de';

dayjs.extend(advancedFormat);

export default {
    install: (app: any) => {
        app.provide('dayjs', dayjs);
    }
}