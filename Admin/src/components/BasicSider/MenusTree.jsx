
import { mapState } from 'vuex'
import { routes } from '@/router'

export default {
  name: 'menus-tree',
  props: {
    menu: {
      type: Object,
    },
  },
  computed: {
    ...mapState(['theme']),
    menus () {
      return routes
    },
  },
  methods: {
    goPage (menu) {
      this.$router.push({ name: menu.name })
    },
    renderItem (menu) {
      return (
        <a-menu-item key={menu.name} onClick={() => this.goPage(menu)}>
            {menu.meta && menu.meta.icon ? <a-icon type={menu.meta.icon} /> : null}
            <span> {menu.meta?.title} </span>
        </a-menu-item>
      )
    },
    renderMenu (menu) {
      const menuArr = []
      menu.forEach((item) => {
        if (!item.hidden) {
          if (item.children && item.children.length > 0) {
            menuArr.push((
              <a-sub-menu key={item.name}>
                <span slot="title">
                  {this.renderItem(item)}
                </span>
                {this.renderMenu(item.children)}
              </a-sub-menu>
            ))
          } else {
            menuArr.push(this.renderItem(item))
          }
        }
      })
      console.log(menuArr)
      return menuArr
    },
  },
  render () {
    return (
      <a-menu theme={this.theme} mode="inline" default-selected-keys={['index']}>
        {this.renderMenu(this.menus)}
      </a-menu>
    )
  },
}
