import { lazy, type ComponentType } from 'react'

import AlertUsageSource from './alert/usage.tsx?raw'
import AlertVariantsSource from './alert/variants.tsx?raw'
import AlertFlatSource from './alert/flat.tsx?raw'
import AlertWithIconSource from './alert/with-icon.tsx?raw'

import AvatarUsageSource from './avatar/usage.tsx?raw'
import AvatarSizesSource from './avatar/sizes.tsx?raw'
import AvatarBorderedSource from './avatar/bordered.tsx?raw'
import AvatarInitialsSource from './avatar/initials.tsx?raw'
import AvatarFallbackSource from './avatar/fallback.tsx?raw'

import CheckboxUsageSource from './checkbox/usage.tsx?raw'
import CheckboxSizesSource from './checkbox/sizes.tsx?raw'
import CheckboxColorsSource from './checkbox/colors.tsx?raw'
import CheckboxGroupSource from './checkbox/group.tsx?raw'
import CheckboxDisabledSource from './checkbox/disabled.tsx?raw'

import RadioUsageSource from './radio/usage.tsx?raw'
import RadioSizesSource from './radio/sizes.tsx?raw'
import RadioColorsSource from './radio/colors.tsx?raw'
import RadioOrientationSource from './radio/orientation.tsx?raw'

import SwitchUsageSource from './switch/usage.tsx?raw'
import SwitchSizesSource from './switch/sizes.tsx?raw'
import SwitchColorsSource from './switch/colors.tsx?raw'
import SwitchDisabledSource from './switch/disabled.tsx?raw'

import TabsUsageSource from './tabs/usage.tsx?raw'
import TabsVariantsSource from './tabs/variants.tsx?raw'
import TabsSizesSource from './tabs/sizes.tsx?raw'
import TabsDisabledSource from './tabs/disabled.tsx?raw'

import TooltipUsageSource from './tooltip/usage.tsx?raw'
import TooltipWithArrowSource from './tooltip/with-arrow.tsx?raw'
import TooltipPlacementSource from './tooltip/placement.tsx?raw'

import PopoverUsageSource from './popover/usage.tsx?raw'
import PopoverWithArrowSource from './popover/with-arrow.tsx?raw'
import PopoverSizesSource from './popover/sizes.tsx?raw'

import AccordionUsageSource from './accordion/usage.tsx?raw'
import AccordionVariantsSource from './accordion/variants.tsx?raw'
import AccordionMultipleSource from './accordion/multiple.tsx?raw'

import ProgressUsageSource from './progress/usage.tsx?raw'
import ProgressSizesSource from './progress/sizes.tsx?raw'
import ProgressColorsSource from './progress/colors.tsx?raw'
import ProgressIndeterminateSource from './progress/indeterminate.tsx?raw'

import MeterUsageSource from './meter/usage.tsx?raw'
import MeterSizesSource from './meter/sizes.tsx?raw'
import MeterColorsSource from './meter/colors.tsx?raw'

import SelectUsageSource from './select/usage.tsx?raw'
import SelectSizesSource from './select/sizes.tsx?raw'
import SelectDisabledOptionSource from './select/disabled-option.tsx?raw'
import SelectDisabledSource from './select/disabled.tsx?raw'

import SliderUsageSource from './slider/usage.tsx?raw'
import SliderSizesSource from './slider/sizes.tsx?raw'
import SliderColorsSource from './slider/colors.tsx?raw'
import SliderRangeSource from './slider/range.tsx?raw'

import SearchFieldUsageSource from './search-field/usage.tsx?raw'
import SearchFieldSizesSource from './search-field/sizes.tsx?raw'
import SearchFieldControlledSource from './search-field/controlled.tsx?raw'

import ModalUsageSource from './modal/usage.tsx?raw'
import ModalSizesSource from './modal/sizes.tsx?raw'
import ModalScrollSource from './modal/scroll.tsx?raw'

import MenuUsageSource from './menu/usage.tsx?raw'
import MenuSectionsSource from './menu/sections.tsx?raw'
import MenuDisabledSource from './menu/disabled.tsx?raw'

import BreadcrumbsUsageSource from './breadcrumbs/usage.tsx?raw'
import BreadcrumbsSizesSource from './breadcrumbs/sizes.tsx?raw'

import TextareaUsageSource from './textarea/usage.tsx?raw'
import TextareaSizesSource from './textarea/sizes.tsx?raw'
import TextareaDescriptionSource from './textarea/description.tsx?raw'
import TextareaErrorSource from './textarea/error.tsx?raw'

import ToggleButtonUsageSource from './toggle-button/usage.tsx?raw'
import ToggleButtonSizesSource from './toggle-button/sizes.tsx?raw'
import ToggleButtonGroupSource from './toggle-button/group.tsx?raw'
import ToggleButtonMultipleSource from './toggle-button/multiple.tsx?raw'

import TagGroupUsageSource from './tag-group/usage.tsx?raw'
import TagGroupSizesSource from './tag-group/sizes.tsx?raw'
import TagGroupRemovableSource from './tag-group/removable.tsx?raw'

import ComboBoxUsageSource from './combo-box/usage.tsx?raw'
import ComboBoxSizesSource from './combo-box/sizes.tsx?raw'
import ComboBoxDisabledSource from './combo-box/disabled.tsx?raw'

import NumberFieldUsageSource from './number-field/usage.tsx?raw'
import NumberFieldSizesSource from './number-field/sizes.tsx?raw'
import NumberFieldRangeSource from './number-field/range.tsx?raw'
import NumberFieldCurrencySource from './number-field/currency.tsx?raw'

import FileTriggerUsageSource from './file-trigger/usage.tsx?raw'
import FileTriggerMultipleSource from './file-trigger/multiple.tsx?raw'
import FileTriggerPreviewSource from './file-trigger/preview.tsx?raw'

import TextUsageSource from './text/usage.tsx?raw'
import TextSizesSource from './text/sizes.tsx?raw'
import TextTonesSource from './text/tones.tsx?raw'
import TextWeightsSource from './text/weights.tsx?raw'

import HeadingUsageSource from './heading/usage.tsx?raw'
import HeadingLevelsSource from './heading/levels.tsx?raw'

import KeyboardUsageSource from './keyboard/usage.tsx?raw'
import KeyboardSizesSource from './keyboard/sizes.tsx?raw'
import KeyboardInButtonSource from './keyboard/in-button.tsx?raw'

import VisuallyHiddenUsageSource from './visually-hidden/usage.tsx?raw'
import VisuallyHiddenSkipLinkSource from './visually-hidden/skip-link.tsx?raw'

import GroupUsageSource from './group/usage.tsx?raw'
import GroupOrientationSource from './group/orientation.tsx?raw'

import DisclosureUsageSource from './disclosure/usage.tsx?raw'
import DisclosureGroupSource from './disclosure/group.tsx?raw'
import DisclosureControlledSource from './disclosure/controlled.tsx?raw'

import AutocompleteUsageSource from './autocomplete/usage.tsx?raw'
import AutocompleteSectionsSource from './autocomplete/sections.tsx?raw'

import ToolbarUsageSource from './toolbar/usage.tsx?raw'
import ToolbarOrientationSource from './toolbar/orientation.tsx?raw'

import DropZoneUsageSource from './drop-zone/usage.tsx?raw'
import DropZoneSizesSource from './drop-zone/sizes.tsx?raw'
import DropZoneWithTriggerSource from './drop-zone/with-trigger.tsx?raw'

import BadgeUsageSource from './badge/usage.tsx?raw'
import BadgeVariantsSource from './badge/variants.tsx?raw'
import BadgeColorsSource from './badge/colors.tsx?raw'
import BadgeSizesSource from './badge/sizes.tsx?raw'
import BadgeDotSource from './badge/dot.tsx?raw'
import BadgeCountsSource from './badge/counts.tsx?raw'

import ButtonUsageSource from './button/usage.tsx?raw'
import ButtonVariantsSource from './button/variants.tsx?raw'
import ButtonSizesSource from './button/sizes.tsx?raw'
import ButtonDisabledSource from './button/disabled.tsx?raw'
import ButtonIconOnlySource from './button/icon-only.tsx?raw'
import ButtonFullWidthSource from './button/full-width.tsx?raw'
import ButtonGroupSource from './button/group.tsx?raw'
import ButtonGroupOverrideSource from './button/group-override.tsx?raw'

import CardUsageSource from './card/usage.tsx?raw'
import CardVariantsSource from './card/variants.tsx?raw'
import CardSizesSource from './card/sizes.tsx?raw'
import CardPressableSource from './card/pressable.tsx?raw'
import CardFullWidthSource from './card/full-width.tsx?raw'
import CardBlurredFooterSource from './card/blurred-footer.tsx?raw'

import DividerUsageSource from './divider/usage.tsx?raw'
import DividerHorizontalSource from './divider/horizontal.tsx?raw'
import DividerVerticalSource from './divider/vertical.tsx?raw'

import FormUsageSource from './form/usage.tsx?raw'
import FormFullWidthSource from './form/full-width.tsx?raw'
import FormValidationSource from './form/validation.tsx?raw'

import InputUsageSource from './input/usage.tsx?raw'
import InputVariantsSource from './input/variants.tsx?raw'
import InputSizesSource from './input/sizes.tsx?raw'
import InputDescriptionSource from './input/description.tsx?raw'
import InputErrorSource from './input/error.tsx?raw'
import InputDisabledSource from './input/disabled.tsx?raw'
import InputContentSlotsSource from './input/content-slots.tsx?raw'
import InputTextareaSource from './input/textarea.tsx?raw'

import LinkUsageSource from './link/usage.tsx?raw'
import LinkColorsSource from './link/colors.tsx?raw'
import LinkSizesSource from './link/sizes.tsx?raw'
import LinkUnderlineSource from './link/underline.tsx?raw'
import LinkBlockSource from './link/block.tsx?raw'
import LinkExternalSource from './link/external.tsx?raw'
import LinkCustomIconSource from './link/custom-icon.tsx?raw'
import LinkDisabledSource from './link/disabled.tsx?raw'

import SkeletonUsageSource from './skeleton/usage.tsx?raw'
import SkeletonLoadedSource from './skeleton/loaded.tsx?raw'
import SkeletonCardPlaceholderSource from './skeleton/card-placeholder.tsx?raw'

import SpinnerUsageSource from './spinner/usage.tsx?raw'
import SpinnerSizesSource from './spinner/sizes.tsx?raw'
import SpinnerColorsSource from './spinner/colors.tsx?raw'
import SpinnerCurrentSource from './spinner/current.tsx?raw'
import SpinnerLabelSource from './spinner/label.tsx?raw'
import SpinnerInButtonSource from './spinner/in-button.tsx?raw'

interface Demo {
  component: ComponentType
  source: string
}

export const demos: Record<string, Demo> = {
  'alert-usage': { component: lazy(() => import('./alert/usage')), source: AlertUsageSource },
  'alert-variants': {
    component: lazy(() => import('./alert/variants')),
    source: AlertVariantsSource,
  },
  'alert-flat': { component: lazy(() => import('./alert/flat')), source: AlertFlatSource },
  'alert-with-icon': {
    component: lazy(() => import('./alert/with-icon')),
    source: AlertWithIconSource,
  },

  'avatar-usage': { component: lazy(() => import('./avatar/usage')), source: AvatarUsageSource },
  'avatar-sizes': { component: lazy(() => import('./avatar/sizes')), source: AvatarSizesSource },
  'avatar-bordered': {
    component: lazy(() => import('./avatar/bordered')),
    source: AvatarBorderedSource,
  },
  'avatar-initials': {
    component: lazy(() => import('./avatar/initials')),
    source: AvatarInitialsSource,
  },
  'avatar-fallback': {
    component: lazy(() => import('./avatar/fallback')),
    source: AvatarFallbackSource,
  },

  'checkbox-usage': {
    component: lazy(() => import('./checkbox/usage')),
    source: CheckboxUsageSource,
  },
  'checkbox-sizes': {
    component: lazy(() => import('./checkbox/sizes')),
    source: CheckboxSizesSource,
  },
  'checkbox-colors': {
    component: lazy(() => import('./checkbox/colors')),
    source: CheckboxColorsSource,
  },
  'checkbox-group': {
    component: lazy(() => import('./checkbox/group')),
    source: CheckboxGroupSource,
  },
  'checkbox-disabled': {
    component: lazy(() => import('./checkbox/disabled')),
    source: CheckboxDisabledSource,
  },

  'radio-usage': { component: lazy(() => import('./radio/usage')), source: RadioUsageSource },
  'radio-sizes': { component: lazy(() => import('./radio/sizes')), source: RadioSizesSource },
  'radio-colors': { component: lazy(() => import('./radio/colors')), source: RadioColorsSource },
  'radio-orientation': {
    component: lazy(() => import('./radio/orientation')),
    source: RadioOrientationSource,
  },

  'switch-usage': { component: lazy(() => import('./switch/usage')), source: SwitchUsageSource },
  'switch-sizes': { component: lazy(() => import('./switch/sizes')), source: SwitchSizesSource },
  'switch-colors': {
    component: lazy(() => import('./switch/colors')),
    source: SwitchColorsSource,
  },
  'switch-disabled': {
    component: lazy(() => import('./switch/disabled')),
    source: SwitchDisabledSource,
  },

  'tabs-usage': { component: lazy(() => import('./tabs/usage')), source: TabsUsageSource },
  'tabs-variants': {
    component: lazy(() => import('./tabs/variants')),
    source: TabsVariantsSource,
  },
  'tabs-sizes': { component: lazy(() => import('./tabs/sizes')), source: TabsSizesSource },
  'tabs-disabled': {
    component: lazy(() => import('./tabs/disabled')),
    source: TabsDisabledSource,
  },

  'tooltip-usage': {
    component: lazy(() => import('./tooltip/usage')),
    source: TooltipUsageSource,
  },
  'tooltip-with-arrow': {
    component: lazy(() => import('./tooltip/with-arrow')),
    source: TooltipWithArrowSource,
  },
  'tooltip-placement': {
    component: lazy(() => import('./tooltip/placement')),
    source: TooltipPlacementSource,
  },

  'popover-usage': {
    component: lazy(() => import('./popover/usage')),
    source: PopoverUsageSource,
  },
  'popover-with-arrow': {
    component: lazy(() => import('./popover/with-arrow')),
    source: PopoverWithArrowSource,
  },
  'popover-sizes': {
    component: lazy(() => import('./popover/sizes')),
    source: PopoverSizesSource,
  },

  'accordion-usage': {
    component: lazy(() => import('./accordion/usage')),
    source: AccordionUsageSource,
  },
  'accordion-variants': {
    component: lazy(() => import('./accordion/variants')),
    source: AccordionVariantsSource,
  },
  'accordion-multiple': {
    component: lazy(() => import('./accordion/multiple')),
    source: AccordionMultipleSource,
  },

  'progress-usage': {
    component: lazy(() => import('./progress/usage')),
    source: ProgressUsageSource,
  },
  'progress-sizes': {
    component: lazy(() => import('./progress/sizes')),
    source: ProgressSizesSource,
  },
  'progress-colors': {
    component: lazy(() => import('./progress/colors')),
    source: ProgressColorsSource,
  },
  'progress-indeterminate': {
    component: lazy(() => import('./progress/indeterminate')),
    source: ProgressIndeterminateSource,
  },

  'meter-usage': { component: lazy(() => import('./meter/usage')), source: MeterUsageSource },
  'meter-sizes': { component: lazy(() => import('./meter/sizes')), source: MeterSizesSource },
  'meter-colors': { component: lazy(() => import('./meter/colors')), source: MeterColorsSource },

  'select-usage': { component: lazy(() => import('./select/usage')), source: SelectUsageSource },
  'select-sizes': { component: lazy(() => import('./select/sizes')), source: SelectSizesSource },
  'select-disabled-option': {
    component: lazy(() => import('./select/disabled-option')),
    source: SelectDisabledOptionSource,
  },
  'select-disabled': {
    component: lazy(() => import('./select/disabled')),
    source: SelectDisabledSource,
  },

  'slider-usage': { component: lazy(() => import('./slider/usage')), source: SliderUsageSource },
  'slider-sizes': { component: lazy(() => import('./slider/sizes')), source: SliderSizesSource },
  'slider-colors': {
    component: lazy(() => import('./slider/colors')),
    source: SliderColorsSource,
  },
  'slider-range': { component: lazy(() => import('./slider/range')), source: SliderRangeSource },

  'search-field-usage': {
    component: lazy(() => import('./search-field/usage')),
    source: SearchFieldUsageSource,
  },
  'search-field-sizes': {
    component: lazy(() => import('./search-field/sizes')),
    source: SearchFieldSizesSource,
  },
  'search-field-controlled': {
    component: lazy(() => import('./search-field/controlled')),
    source: SearchFieldControlledSource,
  },

  'modal-usage': { component: lazy(() => import('./modal/usage')), source: ModalUsageSource },
  'modal-sizes': { component: lazy(() => import('./modal/sizes')), source: ModalSizesSource },
  'modal-scroll': { component: lazy(() => import('./modal/scroll')), source: ModalScrollSource },

  'menu-usage': { component: lazy(() => import('./menu/usage')), source: MenuUsageSource },
  'menu-sections': {
    component: lazy(() => import('./menu/sections')),
    source: MenuSectionsSource,
  },
  'menu-disabled': {
    component: lazy(() => import('./menu/disabled')),
    source: MenuDisabledSource,
  },

  'breadcrumbs-usage': {
    component: lazy(() => import('./breadcrumbs/usage')),
    source: BreadcrumbsUsageSource,
  },
  'breadcrumbs-sizes': {
    component: lazy(() => import('./breadcrumbs/sizes')),
    source: BreadcrumbsSizesSource,
  },

  'textarea-usage': {
    component: lazy(() => import('./textarea/usage')),
    source: TextareaUsageSource,
  },
  'textarea-sizes': {
    component: lazy(() => import('./textarea/sizes')),
    source: TextareaSizesSource,
  },
  'textarea-description': {
    component: lazy(() => import('./textarea/description')),
    source: TextareaDescriptionSource,
  },
  'textarea-error': {
    component: lazy(() => import('./textarea/error')),
    source: TextareaErrorSource,
  },

  'toggle-button-usage': {
    component: lazy(() => import('./toggle-button/usage')),
    source: ToggleButtonUsageSource,
  },
  'toggle-button-sizes': {
    component: lazy(() => import('./toggle-button/sizes')),
    source: ToggleButtonSizesSource,
  },
  'toggle-button-group': {
    component: lazy(() => import('./toggle-button/group')),
    source: ToggleButtonGroupSource,
  },
  'toggle-button-multiple': {
    component: lazy(() => import('./toggle-button/multiple')),
    source: ToggleButtonMultipleSource,
  },

  'tag-group-usage': {
    component: lazy(() => import('./tag-group/usage')),
    source: TagGroupUsageSource,
  },
  'tag-group-sizes': {
    component: lazy(() => import('./tag-group/sizes')),
    source: TagGroupSizesSource,
  },
  'tag-group-removable': {
    component: lazy(() => import('./tag-group/removable')),
    source: TagGroupRemovableSource,
  },

  'combo-box-usage': {
    component: lazy(() => import('./combo-box/usage')),
    source: ComboBoxUsageSource,
  },
  'combo-box-sizes': {
    component: lazy(() => import('./combo-box/sizes')),
    source: ComboBoxSizesSource,
  },
  'combo-box-disabled': {
    component: lazy(() => import('./combo-box/disabled')),
    source: ComboBoxDisabledSource,
  },

  'number-field-usage': {
    component: lazy(() => import('./number-field/usage')),
    source: NumberFieldUsageSource,
  },
  'number-field-sizes': {
    component: lazy(() => import('./number-field/sizes')),
    source: NumberFieldSizesSource,
  },
  'number-field-range': {
    component: lazy(() => import('./number-field/range')),
    source: NumberFieldRangeSource,
  },
  'number-field-currency': {
    component: lazy(() => import('./number-field/currency')),
    source: NumberFieldCurrencySource,
  },

  'file-trigger-usage': {
    component: lazy(() => import('./file-trigger/usage')),
    source: FileTriggerUsageSource,
  },
  'file-trigger-multiple': {
    component: lazy(() => import('./file-trigger/multiple')),
    source: FileTriggerMultipleSource,
  },
  'file-trigger-preview': {
    component: lazy(() => import('./file-trigger/preview')),
    source: FileTriggerPreviewSource,
  },

  'text-usage': { component: lazy(() => import('./text/usage')), source: TextUsageSource },
  'text-sizes': { component: lazy(() => import('./text/sizes')), source: TextSizesSource },
  'text-tones': { component: lazy(() => import('./text/tones')), source: TextTonesSource },
  'text-weights': {
    component: lazy(() => import('./text/weights')),
    source: TextWeightsSource,
  },

  'heading-usage': {
    component: lazy(() => import('./heading/usage')),
    source: HeadingUsageSource,
  },
  'heading-levels': {
    component: lazy(() => import('./heading/levels')),
    source: HeadingLevelsSource,
  },

  'keyboard-usage': {
    component: lazy(() => import('./keyboard/usage')),
    source: KeyboardUsageSource,
  },
  'keyboard-sizes': {
    component: lazy(() => import('./keyboard/sizes')),
    source: KeyboardSizesSource,
  },
  'keyboard-in-button': {
    component: lazy(() => import('./keyboard/in-button')),
    source: KeyboardInButtonSource,
  },

  'visually-hidden-usage': {
    component: lazy(() => import('./visually-hidden/usage')),
    source: VisuallyHiddenUsageSource,
  },
  'visually-hidden-skip-link': {
    component: lazy(() => import('./visually-hidden/skip-link')),
    source: VisuallyHiddenSkipLinkSource,
  },

  'group-usage': { component: lazy(() => import('./group/usage')), source: GroupUsageSource },
  'group-orientation': {
    component: lazy(() => import('./group/orientation')),
    source: GroupOrientationSource,
  },

  'disclosure-usage': {
    component: lazy(() => import('./disclosure/usage')),
    source: DisclosureUsageSource,
  },
  'disclosure-group': {
    component: lazy(() => import('./disclosure/group')),
    source: DisclosureGroupSource,
  },
  'disclosure-controlled': {
    component: lazy(() => import('./disclosure/controlled')),
    source: DisclosureControlledSource,
  },

  'autocomplete-usage': {
    component: lazy(() => import('./autocomplete/usage')),
    source: AutocompleteUsageSource,
  },
  'autocomplete-sections': {
    component: lazy(() => import('./autocomplete/sections')),
    source: AutocompleteSectionsSource,
  },

  'toolbar-usage': {
    component: lazy(() => import('./toolbar/usage')),
    source: ToolbarUsageSource,
  },
  'toolbar-orientation': {
    component: lazy(() => import('./toolbar/orientation')),
    source: ToolbarOrientationSource,
  },

  'drop-zone-usage': {
    component: lazy(() => import('./drop-zone/usage')),
    source: DropZoneUsageSource,
  },
  'drop-zone-sizes': {
    component: lazy(() => import('./drop-zone/sizes')),
    source: DropZoneSizesSource,
  },
  'drop-zone-with-trigger': {
    component: lazy(() => import('./drop-zone/with-trigger')),
    source: DropZoneWithTriggerSource,
  },

  'badge-usage': { component: lazy(() => import('./badge/usage')), source: BadgeUsageSource },
  'badge-variants': {
    component: lazy(() => import('./badge/variants')),
    source: BadgeVariantsSource,
  },
  'badge-colors': { component: lazy(() => import('./badge/colors')), source: BadgeColorsSource },
  'badge-sizes': { component: lazy(() => import('./badge/sizes')), source: BadgeSizesSource },
  'badge-dot': { component: lazy(() => import('./badge/dot')), source: BadgeDotSource },
  'badge-counts': { component: lazy(() => import('./badge/counts')), source: BadgeCountsSource },

  'button-usage': { component: lazy(() => import('./button/usage')), source: ButtonUsageSource },
  'button-variants': {
    component: lazy(() => import('./button/variants')),
    source: ButtonVariantsSource,
  },
  'button-sizes': { component: lazy(() => import('./button/sizes')), source: ButtonSizesSource },
  'button-disabled': {
    component: lazy(() => import('./button/disabled')),
    source: ButtonDisabledSource,
  },
  'button-icon-only': {
    component: lazy(() => import('./button/icon-only')),
    source: ButtonIconOnlySource,
  },
  'button-full-width': {
    component: lazy(() => import('./button/full-width')),
    source: ButtonFullWidthSource,
  },
  'button-group': { component: lazy(() => import('./button/group')), source: ButtonGroupSource },
  'button-group-override': {
    component: lazy(() => import('./button/group-override')),
    source: ButtonGroupOverrideSource,
  },

  'card-usage': { component: lazy(() => import('./card/usage')), source: CardUsageSource },
  'card-variants': {
    component: lazy(() => import('./card/variants')),
    source: CardVariantsSource,
  },
  'card-sizes': { component: lazy(() => import('./card/sizes')), source: CardSizesSource },
  'card-pressable': {
    component: lazy(() => import('./card/pressable')),
    source: CardPressableSource,
  },
  'card-full-width': {
    component: lazy(() => import('./card/full-width')),
    source: CardFullWidthSource,
  },
  'card-blurred-footer': {
    component: lazy(() => import('./card/blurred-footer')),
    source: CardBlurredFooterSource,
  },

  'divider-usage': {
    component: lazy(() => import('./divider/usage')),
    source: DividerUsageSource,
  },
  'divider-horizontal': {
    component: lazy(() => import('./divider/horizontal')),
    source: DividerHorizontalSource,
  },
  'divider-vertical': {
    component: lazy(() => import('./divider/vertical')),
    source: DividerVerticalSource,
  },

  'form-usage': { component: lazy(() => import('./form/usage')), source: FormUsageSource },
  'form-full-width': {
    component: lazy(() => import('./form/full-width')),
    source: FormFullWidthSource,
  },
  'form-validation': {
    component: lazy(() => import('./form/validation')),
    source: FormValidationSource,
  },

  'input-usage': { component: lazy(() => import('./input/usage')), source: InputUsageSource },
  'input-variants': {
    component: lazy(() => import('./input/variants')),
    source: InputVariantsSource,
  },
  'input-sizes': { component: lazy(() => import('./input/sizes')), source: InputSizesSource },
  'input-description': {
    component: lazy(() => import('./input/description')),
    source: InputDescriptionSource,
  },
  'input-error': { component: lazy(() => import('./input/error')), source: InputErrorSource },
  'input-disabled': {
    component: lazy(() => import('./input/disabled')),
    source: InputDisabledSource,
  },
  'input-content-slots': {
    component: lazy(() => import('./input/content-slots')),
    source: InputContentSlotsSource,
  },
  'input-textarea': {
    component: lazy(() => import('./input/textarea')),
    source: InputTextareaSource,
  },

  'link-usage': { component: lazy(() => import('./link/usage')), source: LinkUsageSource },
  'link-colors': { component: lazy(() => import('./link/colors')), source: LinkColorsSource },
  'link-sizes': { component: lazy(() => import('./link/sizes')), source: LinkSizesSource },
  'link-underline': {
    component: lazy(() => import('./link/underline')),
    source: LinkUnderlineSource,
  },
  'link-block': { component: lazy(() => import('./link/block')), source: LinkBlockSource },
  'link-external': {
    component: lazy(() => import('./link/external')),
    source: LinkExternalSource,
  },
  'link-custom-icon': {
    component: lazy(() => import('./link/custom-icon')),
    source: LinkCustomIconSource,
  },
  'link-disabled': {
    component: lazy(() => import('./link/disabled')),
    source: LinkDisabledSource,
  },

  'skeleton-usage': {
    component: lazy(() => import('./skeleton/usage')),
    source: SkeletonUsageSource,
  },
  'skeleton-loaded': {
    component: lazy(() => import('./skeleton/loaded')),
    source: SkeletonLoadedSource,
  },
  'skeleton-card-placeholder': {
    component: lazy(() => import('./skeleton/card-placeholder')),
    source: SkeletonCardPlaceholderSource,
  },

  'spinner-usage': {
    component: lazy(() => import('./spinner/usage')),
    source: SpinnerUsageSource,
  },
  'spinner-sizes': {
    component: lazy(() => import('./spinner/sizes')),
    source: SpinnerSizesSource,
  },
  'spinner-colors': {
    component: lazy(() => import('./spinner/colors')),
    source: SpinnerColorsSource,
  },
  'spinner-current': {
    component: lazy(() => import('./spinner/current')),
    source: SpinnerCurrentSource,
  },
  'spinner-label': {
    component: lazy(() => import('./spinner/label')),
    source: SpinnerLabelSource,
  },
  'spinner-in-button': {
    component: lazy(() => import('./spinner/in-button')),
    source: SpinnerInButtonSource,
  },
}

export function getDemo(name: string): Demo | undefined {
  return demos[name]
}
