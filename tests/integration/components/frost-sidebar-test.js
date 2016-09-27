import Ember from 'ember'
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {
  $hook
} from 'ember-hook'

describeComponent(
  'frost-sidebar',
  'Integration: FrostSidebarComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`
        {{frost-sidebar
          class="demo-instance"
          content=(component 'simple-content' text='test')
        }}`)
      expect($hook('frost-sidebar-close')).to.have.length(1)
    })

    it('renders and can open sidebar', function () {
      this.render(hbs`
        {{frost-sidebar
          class="demo-instance"
          content=(component 'simple-content' text='test')
        }}`)
      expect($hook('frost-sidebar-close')).to.have.length(1)
      Ember.run(() => this.$('.frost-sidebar-closed svg').click())
      expect($hook('frost-sidebar-open')).to.have.length(1)
    })
  }
)
