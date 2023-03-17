import { ReactiveFormsModule } from '@angular/forms';

import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import {
  ButtonComponent,
  FormFieldComponent,
  HeaderComponent,
  HeaderGroupComponent,
  InputComponent,
  PanelComponent,
} from 'uic-design';

export default {
  title: 'Surfaces/Panel',
  component: PanelComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-panel is a kind of surfece. It provides custom, colorized wrapper with padding.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        InputComponent,
        FormFieldComponent,
        ButtonComponent,
        HeaderComponent,
        HeaderGroupComponent,
      ],
    }),
  ],
} as Meta;

const Template: Story = (args: Args) => {

  const onSubmit: () => void = () => {
    alert('Form has been submitted!');
  };

  return ({
  props: {
    ...args,
    onSubmit
  },
  template: `<uic-panel [size]="size">
        <uic-header-group>
          <h2 uic-header borderBottom="true">Login Panel</h2>
          <h5 uic-header>Welcome back!</h5>
        </uic-header-group>
        <form autocomplete="off" (submit)="onSubmit()">
            <uic-form-field label="login">
                <input uic-input>
            </uic-form-field>
            <uic-form-field label="password">
                <input uic-input>
            </uic-form-field>
            <br>
            <button uic-button type="submit" color="primary" size="wide">Submit</button>
        </form>
    </uic-panel>`,
});
}

export const Basic: Story = Template.bind({});
export const Wide: Story = Template.bind({});
export const Half: Story = Template.bind({});

Half.args = {
  size: 'half',
};

Wide.args = {
  size: 'wide',
};
